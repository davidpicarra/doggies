import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('has correct name', () => {
    expect(Hello.name).to.be.a('string')
    expect(Hello.name).to.equal('hello')
  })
})
