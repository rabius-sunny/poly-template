import { NextRequest, NextResponse } from 'next/server'
import { templateRegistry } from '~/lib/templateRegistry'

type TTemplate =
  | 'DEFAULT'
  | 'FASHION'
  | 'ELECTRONICS'
  | 'FOOD'
  | 'PHARMACEUTICALS'
  | 'BEAUTY'
  | 'CLOTHING'
  | 'FLOWER_SHOP'
  | 'FRUIT'
  | 'GROCERY'
  | 'HARDWARE'
  | 'HOME'
  | 'JEWELRY'
  | 'PET'
  | 'SPORTS'
  | 'TOYS'

export async function GET(request: NextRequest) {
  try {
    // Get template from cookie
    const currentTemplate =
      (request.cookies.get('current-template')?.value as TTemplate) || 'DEFAULT'

    // Validate template exists
    if (!templateRegistry.exists(currentTemplate)) {
      return NextResponse.json({
        template: 'DEFAULT',
        config: templateRegistry.get('DEFAULT')
      })
    }

    const config = templateRegistry.get(currentTemplate)

    return NextResponse.json({
      template: currentTemplate,
      config
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch current template' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { template } = await request.json()

    if (!template || !templateRegistry.exists(template)) {
      return NextResponse.json({ error: 'Invalid template' }, { status: 400 })
    }

    const response = NextResponse.json({ success: true })

    // Set template in cookie
    response.cookies.set('current-template', template, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Failed to set template' }, { status: 500 })
  }
}
