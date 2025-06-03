import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get current template from cookie or default to 'DEFAULT'
  const currentTemplate = (request.cookies.get('current-template')?.value as TTemplate) || 'DEFAULT'

  // Check if template switch is requested
  const templateParam = request.nextUrl.searchParams.get('template') as TTemplate

  if (templateParam && isValidTemplate(templateParam)) {
    // Set new template in cookie with production-friendly settings
    response.cookies.set('current-template', templateParam, {
      path: '/'
    })

    // Redirect to remove template param from URL
    const url = new URL(request.url)
    url.searchParams.delete('template')
    return NextResponse.redirect(url)
  }

  // Add current template to headers for use in components
  response.headers.set('x-current-template', currentTemplate)

  return response
}

function isValidTemplate(template: string): template is TTemplate {
  const validTemplates: TTemplate[] = [
    'DEFAULT',
    'FASHION',
    'ELECTRONICS',
    'FOOD',
    'PHARMACEUTICALS',
    'BEAUTY',
    'CLOTHING',
    'FLOWER_SHOP',
    'FRUIT',
    'GROCERY',
    'HARDWARE',
    'HOME',
    'JEWELRY',
    'PET',
    'SPORTS',
    'TOYS'
  ]

  return validTemplates.includes(template as TTemplate)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
