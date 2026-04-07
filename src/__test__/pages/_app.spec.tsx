import React from 'react'
import { render } from '@testing-library/react'
import App from '@/pages/_app'
import type { AppProps } from 'next/app'

jest.mock('next-auth/react', () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useSession: () => ({ data: null, status: 'unauthenticated' }),
}))

jest.mock('next/script', () => {
  return function MockScript() {
    return <></>
  }
})

jest.mock('@/components/layouts/AppShell', () => {
  return function MockAppShell({ children }: { children: React.ReactNode }) {
    return <div data-testid="appshell-mock">{children}</div>
  }
})

describe('Pages | _app', () => {
  it('renders app without crashing', () => {
    const Component = () => <div>Test Page</div>
    const props: AppProps = {
      Component,
      pageProps: {},
      router: {} as any,
    }
    expect(() => render(<App {...props} />)).not.toThrow()
  })

  it('wraps component with providers', () => {
    const Component = () => <div>App Test</div>
    const props: AppProps = {
      Component,
      pageProps: {},
      router: {} as any,
    }
    const { getByTestId } = render(<App {...props} />)
    expect(getByTestId('appshell-mock')).toBeInTheDocument()
  })
})
