export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, role, skills, message } = body

    if (!firstName || !lastName || !email || !phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailContent = `
    <h2>New Join Request from YegnaBridge Website</h2>
    
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    
    <h3>Role</h3>
    <p><strong>How they want to contribute:</strong> ${role}</p>
    
    ${skills ? `<h3>Skills & Expertise</h3><p>${skills.replace(/\n/g, '<br>')}</p>` : ''}
    
    ${message ? `<h3>Motivation</h3><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
    
    <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `

    // Log the submission
    console.log('Join Request:', { firstName, lastName, email, phone, role })

    // Send email via Resend if API key exists
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'noreply@resend.dev',
            to: 'yegnabridge.org@gmail.com',
            replyTo: email,
            subject: `New Join Request: ${firstName} ${lastName}`,
            html: emailContent,
          }),
        })

        if (!response.ok) {
          console.error('Resend error:', await response.text())
        }
      } catch (error) {
        console.error('Error sending via Resend:', error)
      }
    }

    return Response.json(
      { 
        success: true, 
        message: 'Join request submitted successfully. We will review your request and contact you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing join request:', error)
    return Response.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
