import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const E_Development = () => {
  return (
    <div className='leading-6 sm:leading-8'>
        <Navbar />
        <div className='grid md:grid-cols-3 max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto'>
        <div className='col-span-2'>
            <p className='text-[15px] pt-10 sm:text-[20px] font-[500]'>Alright! let's look at web development</p>
            <div>
                <div className='max-w-[113px] sm:max-w-[177px] h-[30px] sm:h-[35px] bg-black py-2 mt-5 '>
                    <h2 className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[130px] sm:max-w-[185px] mx-2'>Full stack Development</h2>
                </div>
                <p className='py-5 text-[10px] sm:text-[14px] md:text-[15px]'>The term "full stack developer" 
                refers to a developer or engineer who is capable of working on projects that entail databases, APIs, the creation of user-facing websites,
                 or even collaborating with customers during the planning stage of projects.
                    </p>
                    <p className='text-[10px] sm:text-[14px] md:text-[15px]'>Full stack developer skills:

                        <li>HTML, CSS, JavaScript, and one or more back end languages.</li>

                        <li>specialized in one or more programming languages, such as Ruby, 
                            PHP, or Python, while full stack programmers sometimes work with multiple 
                            languages, especially if they've been working as developers for some time. 
                            You'll typically find
                             jobs for "full stack Ruby developers" or similar positions in job listings.</li>

                        <li>Learned either project management, visual design, web design, or user experience skills — to complete their “stack,” if you will</li>
                        </p>
            </div>

            <div className='max-w-[113px] sm:max-w-[177px] h-[30px] sm:h-[35px] bg-black py-2 mt-5 '>
                    <h2 className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[130px] sm:max-w-[185px] mx-2'>Frontend Development</h2>
                </div>
        
            <p className='text-[10px] sm:text-[14px] md:text-[15px] py-3'>Have you ever visited a website and you loved the design so much that you wish you could to do it. Front end developers design the 
             elements of websites that users can see and interact with directly through web browsers, such as web pages and user interfaces. The
              front end of a website (or online or mobile application) refers to the area that users view and interact with directly. HTML, CSS, 
            and JavaScript were all used in the creation of the front end. JavaScript.</p>
                
                    
                    <div>
                       <div className='max-w-[124px] sm:max-w-[185px] h-[30px] sm:h-[35px] bg-black py-2 mt-5 '>
                       <h2 className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[125px] sm:max-w-[183px] mx-2'>Backend development</h2>
                       </div>
                        <p className='text-[10px] sm:text-[14px] md:text-[15px] py-3'>Back end development is much more of a background process (server-side)
                         Back end programming is far more behind-the-scenes (server-side) and includes languages like PHP, whereas front end development covers
                         everything the user interacts with directly (client-side). Java Python</p>
                         <p className='text-[10px] sm:text-[14px] md:text-[15px]'>One thing to keep in mind is that it's unlikely you'll find many job postings that specifically state "back end software engineer" as a job need. Instead, you'll see postings for engineers who know Ruby (or Ruby on Rails), Java, PHP, etc. since proficiency in a specific programming language is essential for landing a job.</p>
                    </div>
                    <div>
                    <div className='max-w-[92px] sm:max-w-[120px] h-[30px] sm:h-[35px] bg-black py-2 mt-5 '>
                       <h2 className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[90px] sm:max-w-[127px] mx-2'>Other Job roles</h2>
                       </div>
                       <p className='py-4 text-[10px] sm:text-[14px] md:text-[15px]'>Of course, there are a variety of professions within web development, such as cloud developer, machine learning developer, mobile app developer, and many more, but in this article, we'll focus primarily on the fundamentals of development.</p>
                    </div>
                    
                    
                    
                        
        </div>
        <div className=' my-10 sm:my-32 mx-auto'>
        <div className='max-w-[203px] sm:max-w-[288px] h-[35px] sm:h-[35px] bg-black py-2 mt-5 '>
            <h2 className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[200px] sm:max-w-[285px] mx-2'>But wait, are developers in demand?</h2>
        </div>
        <div className='max-h-[450px] p-2 md:max-h-[600px] mx-2 mt-4 border-2 border-black max-w-[290px] sm:max-w-[350px]'>
        
        <p className='font-[500] text-[10px] sm:text-[14px] md:text-[15px]'>
            Front end developer, backend and full stack developer jobs
            are some of the most in-demand roles, and for good reason
        </p>
        <div className='grid grid-rows-5 text-[10px]  py-3 sm:text-[14px] md:text-[15px]'>
            <div className='flex justify-between font-[600] bg-[#cdcdcd]'>
                <p>Job role</p>
                <p>average salary</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>Front end developer</p>
                <p>-</p>
                <p>#300,000</p>
            </div>
            <div className='flex justify-between '>
                <p>Back end developer</p>
                <p>-</p>
                <p>#500,000</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>full stack developer</p>
                <p>-</p>
                <p>#700,000</p>
            </div>
            <div className='flex justify-between'>
                <p>Mobile developer</p>
                <p>-</p>
                <p>#500,000</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>Cloud developer</p>
                <p>-</p>
                <p>#700,000</p>
            </div>
        </div>
        <p className='font-[500] italic text-[10px] sm:text-[14px] md:text-[15px]'> the median salary for these roles in the
            in United States is $60,000 - $ 115,000 per year.  And as of August 2022, there were over 25,000 open front end
            developer jobs across the United States on Indeed.com  
        </p>
        </div>
        
        </div>
       
    </div>
    <div className='max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto'>
        <p className='text-[10px] sm:text-[14px] md:text-[15px]'>Now, let's do some coding. Pay close attention to every information on the next page</p>
    </div>
    <div className='max-w-[133px] sm:max-w-[300px] h-[30px] sm:h-[35px] bg-black py-2 mt-10 sm:mt-20 mb-10 mx-auto '>
        <Link to='/development'> <button className='text-[10px] sm:text-[14px] md:text-[15px] p-1 border-2 border-[#fff] rounded-none font-[500] bg-[#000] absolute text-white w-full max-w-[135px] sm:max-w-[300px] mx-2'><p className='mx-auto'>Take Assessment</p></button></Link> 
    </div>
    <Footer />
    </div>
  )
}

export default E_Development
