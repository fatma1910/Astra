import React from 'react'
import { Container, Wrapper } from '.'
import SectionBadge from './ui/section-badge'
import Marquee from './ui/marquee'
import { reviews } from '@/constants'
import { UserIcon } from 'lucide-react'

const Reviews = () => {

    const firstRow = reviews.slice(0, reviews.length / 2)
    const secondRow = reviews.slice(reviews.length / 2)
    
  return (
    <Wrapper className="flex flex-col items-center justify-center py-10 ">
                <Container>
                <div className="max-w-md mx-auto text-start md:text-center" >
                        <SectionBadge title='Our Customers' />
                        <h2 className="text-3xl lg:text-4xl mt-6 font-semibold">
                        What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        See how Astra empowers businesses of all sizes. Here{"'"}s what real people are saying on Twitter
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((reviews) => (
                                    <figure 
                                        key={reviews.name}
                                        className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:border-zinc-50/[.15] "
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                        <UserIcon className="w-6 h-6" />
                                        <div className="flex flex-col">
                                            <figcaption className="text-sm font-medium dark:text-white">
                                                {reviews.name}
                                            </figcaption>
                                            <p className="text-sm text-muted-foreground ">
                                                {reviews.username}
                                            </p>
                                        </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {reviews.body}
                                        </blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((reviews) => (
                                    <figure 
                                        key={reviews.name}
                                        className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:border-zinc-50/[.15] "
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                        <UserIcon className="w-6 h-6" />
                                        <div className="flex flex-col">
                                            <figcaption className="text-sm font-medium dark:text-white">
                                                {reviews.name}
                                            </figcaption>
                                            <p className="text-sm text-muted-foreground ">
                                                {reviews.username}
                                            </p>
                                        </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {reviews.body}
                                        </blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
  )
}

export default Reviews