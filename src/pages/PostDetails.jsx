import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'










const PostDetails = () => {
    return (
      <div>
          <Navbar/>
          <div className="px-8 md:px -[200px] mt-8">
          <div className="flex justify-between items-center">
              <h1 className="text-2xl font bold text-black md:text-3xl">10 uses of Artificial Intelligence</h1>
              <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
 
              </div>
         
               
             
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@messi</p>
        <div className="flex space-x-2">
          <p>5/09/2024</p>
          <p>10:45</p>
        </div>


          </div>
          <img src="https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?t=st=1725485009~exp=1725488609~hmac=8af373d44375cccf14d157991077904ce4a5c7e4999ec6a35bbe78da04735d85&w=1060" className="w-full mx-auto mt-8 alt="/>  
           <p className="mx-auto mt-8">Artifial Intelligence......</p>
           <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
            </div>


           </div>
           <div className="flex flex-col mt-4">
           <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
           {/*comment*/}
             <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
             <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@snehasish</h3>
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-500 text-sm">16/06/23</p>
                    <p className="text-gray-500 text-sm">16:45</p>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit/></p>
                        <p><MdDelete/></p>
 
                    </div>


                </div>
             </div>
             


             </div>
             <p className="px-4 mt-2">Nice Info!!</p>


           </div>
           
           <div className="w-full flex flex-col mt-4 md:flex-row">
             <input type="text" placeholder="write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
             <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>


           </div>


 
          </div>
          <Footer/>
      </div>
    )
  }
 
  export default PostDetails
