import { FaLinkedin } from "react-icons/fa6";
import logo from '../assets/images/logo.png'
import landon from '../assets/images/landon.jpeg'
import { BsTwitterX } from "react-icons/bs";

export const useDataCustomHook = () => {

    const data = {
        navBar:{
          logo: logo,
          name: 'Steele Consulting',
          navs:[
            {
                name: 'Services',
                path: '/#services',
                ref: 'true'
            },
            {
                name: 'Testimonials',
                path: '/#testimonials',
                ref: 'true'
            },
            {
              name: 'About',
              path: '/#about',
              ref: 'true'
            },
            {
              name: 'Contact',
              path: '/#contact',
              ref: 'true'
            },
          ]
        },
        about: {
          header: 'ABOUT',
          image: landon,
          about: <>
            Landon Steele is a private consultant for technology startups, incubators, and startup-affiliated organizations that are making a real, long-term impact on our planet. Landon worked in Bay Area healthcare for 10 years, biotechnology for 20 years and founded, grew, and sold a startup herself. She was deeply immersed in Silicon Valley culture, helping prepare startups from pre-seed to Series A and beyond, to understand investor expectations and culture.​
​             <br/>
​             <br/>
            She enjoys working with pre-seed startups and those who share their values of empowerment, authenticity, grit, and collaboration. She has worked to highlight the power and value of underrepresented founders.​
            She’s also a wildlife photographer and chef.

          </>,
          socialMedia: [
            {
              name: 'LinkedIn',
              path: '',
              icon: <FaLinkedin/>
            },
            {
              name: '',
              path: '',
              icon: <BsTwitterX color="black" fontSize={30}/>
            }
          ]
        },
        services: {
          header: 'SERVICES',
          services: [
            {
              name: 'Lorem Ipsum',
              image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            },
            {
              name: 'Lorem Ipsum',
              image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            },
            {
              name: 'Lorem Ipsum',
              image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            }
          ]
        },
        testimonials: {
          header: 'TESTIMONIALS',
          max: 70,
          testimonials: [
            {
              name: ' Allison M',
              image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
              testimony: 
              `Landon played a pivotal role in the growth, scaling, and sale of my businesses.
              
              Serving as a rational and highly experienced sounding board, she was an invaluable problem-solver during numerous critical junctures. Landon consistently demonstrated her unwavering support and expertise, providing thought-provoking perspectives and guidance when I needed it most. Her extensive depth of insight and wealth of experience allowed her to seamlessly comprehend my unique challenges, steering me towards more informed and better outcomes. I am immensely grateful for her instrumental role in the success of my ventures`
            },
            {
              name: 'Jennifer A',
              image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
              testimony: `Landon has provided invaluable expertise and advice that has helped move our consulting business forward rapidly. She zoned in on the fact that we needed to clarify and simplify our market messaging in about 5 minutes. Her supportive and direct feedback helped us focus attention in the right direction and solve some of the gaps we had in how we articulate value to the market. In addition to her smarts, her kind nature makes it a real pleasure to spend time with her`
            },
          ]
        },
        contact: {
          header: 'CONTACT US',
          btnName: 'Contact Us',
          iamOptions: [
            {
              label: 'Founder',
              value: 'Founder'
            },
            {
              label: 'Incubator',
              value: 'Incubator'
            },
            {
              label: 'Startup-Affiliated Organization',
              value: 'Startup-Affiliated Organization'
            },
            {
              label: 'Independent Consultant',
              value: 'Independent Consultant'
            },
            {
              label: 'Board Member',
              value: 'Board Member'
            },
            {
              label: 'Other',
              value: 'Other'
            },
          ],
          seriesOptions: [
            {
              label: 'A',
              value: 'A'
            },
            {
              label: 'B',
              value: 'B'
            },
            {
              label: 'C',
              value: 'C'
            },
            {
              label: 'D',
              value: 'D'
            },
            {
              label: 'E',
              value: 'E'
            },
            {
              label: 'Pre-Seed',
              value: 'Pre-Seed'
            },
            {
              label: 'Other',
              value: 'Other'
            }
          ]
        },
        noMatchPage: {
          header: "The Page You Requested Could Not Be Found",
          subHeader:  "I've searched high and low but couldn’t find what you’re looking for. Let’s me find a better place for you to go.",
          buttonText:'Home',
          bgImg : ''
        },
        Footer: {
          header: 'Copyright'
        }
    }
    return data;
}