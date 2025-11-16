import React from 'react'
import Card from "./components/Card"


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "California, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Texas, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "JavaScript Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$38/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "10 hours ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "London, UK"
    }
  ];

  console.log(jobOpenings);


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
        </div>
      })}

    </div>
  )
}

export default App
