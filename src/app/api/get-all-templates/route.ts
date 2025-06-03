import { NextResponse } from 'next/server'
import { templateRegistry } from '~/lib/templateRegistry'

export async function GET() {
  try {
    const templates = templateRegistry.getAll().map((template) => ({
      name: template.name,
      displayName: template.name.toLowerCase().replace('_', ' ')
    }))

    return NextResponse.json({ templates })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 })
  }
}
