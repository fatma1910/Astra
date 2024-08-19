import React from 'react'
import { Container, Wrapper } from '.'
import { LampContainer } from './ui/lamp'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Input } from './ui/input'

const News = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-10">
            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <h1 className=" lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">From Idea to Launch <br />
                        Faster Than Ever</h1>
                        <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                        Build stunning websites with Astra&apos;s intuitive drag-and-drop builder and powerful AI assistant
                        </p>
                        <Button variant='white' className="mt-6" asChild>
                            <Link href='sign-in'>
                            Get started for free
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        </div>
                    </LampContainer>
                </Container>

                <Container className="relative z-[999999]">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                        <div className="flex flex-col justify-start">
                            <h2 className="text-2xl font-bold text-zinc-50">Join our newsletter
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Be up to date with everything about AI builder
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                            <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                <Input 
                                required
                                type="email"
                                placeholder="Enter your email"
                                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                />
                                <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                            </form>
                            <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>

                        </div>
                    </div>
                </Container>
            </Wrapper>
  )
}

export default News