

export const useDataCustomHook = () => {

    const data = {
        navBar:{
          logo: '',
          name: 'Steele Consulting',
          navs:[
            {
                name:  'home',
                path: '/',
                
            },
            {
                name: 'About',
                path: '/#about',
                ref: 'true'
            },
            {
                name: 'Services',
                path: '/#services',
                ref: 'true'
            },
            {
                name: 'Contact',
                path: '/#contact',
                ref: 'true'
            },
          ]
        },
        noMatchPage: {
          header: "The Page You Requested Could Not Be Found",
          subHeader:  "I've searched high and low but couldn’t find what you’re looking for. Let’s me find a better place for you to go.",
          buttonText:'Home',
          bgImg : ''
        },
    }
    return data;
}