import React from "react";
export const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Gun House</div>
          <div className="flex space-x-6">
            <a href="/" className="hover:text-teal-400">Home</a>
            <a href="/shop" className="hover:text-teal-400">Shop</a>
            <a href="/about" className="hover:text-teal-400">About</a>
            <a href="/contact" className="hover:text-teal-400">Contact</a>
          </div>
        </div>
      </nav>
      <div className='flex p-4 m-5 gap-20'>
      <img src="https://th.bing.com/th/id/R.d89308e2e4207cd36416d39f503a5911?rik=YLq8PwXhfNVqWQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgun-png-transparent-background-download-1969.png&ehk=xWIfmmGbeD0jf4CZIsiroimnz%2fJ6i82lMLeXUYW9Lzs%3d&risl=&pid=ImgRaw&r=0" alt="Image" style={{ width: '100px', height: '100px' }} />
      <img src="https://th.bing.com/th/id/R.d76a4e3e25387e7525dec993ecce6abb?rik=Tw0q1vqD%2bv1x9g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgun-png-handgun-png-image-png-image-1024.png&ehk=8ynEK4KNgRqkBNqJrYlGpuxUspXyS7JDjBScfjPBwFc%3d&risl=&pid=ImgRaw&r=0" alt="Image" style={{ width: '100px', height: '100px' }} />
      <img src="https://th.bing.com/th/id/OIP.LsYZsdxV3DKfHy_2jFiqEwHaE8?rs=1&pid=ImgDetMain" alt="Image" style={{ width: '100px', height: '100px' }} />
      <img src="https://th.bing.com/th/id/R.dd8ccf0c7ffa18bc77ed349548c53784?rik=YCeCpR4bAmBPxQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1744100.jpg&ehk=L5KLqkuUdoAhruSmSs1Xj05w7GPUOPhUSHkD06F0qEY%3d&risl=&pid=ImgRaw&r=0" alt="Image" style={{ width: '100px', height: '100px' }} />
      <img src="https://img.freepik.com/premium-photo/gun-white-background_889056-10448.jpg" alt="Image" style={{ width: '100px', height: '100px' }} />
      <img src="https://th.bing.com/th/id/OIP.CJ2W24q4Rbf3ki-rTxv8KgHaGt?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Image" style={{ width: '100px', height: '100px' }} />

      </div>
      <div className='m-50 ml-10 '>
        <img src='https://th.bing.com/th/id/OIP.rkcUkZp513OHA7a_sc0dpwHaE7?rs=1&pid=ImgDetMain' alt="Image" style={{ width: '300px', hight:'10px'}}>
        </img>

      </div>
    <div className='flex p-4 m-5 gap-10'>
      <div className="w-64 h-64  flex flex-col justify-center items-center items-baseline"> 
        <h1><b>INSAS</b></h1>
        <p>A domastically produced assault rifle</p>
        <img src='https://images5.alphacoders.com/593/thumb-1920-593021.jpg' alt="Gun" />
        <button className="bg-teal-400 p-2 rounded-lg m-6 hover:before:visited:blur">Click me</button>
      </div>
      <div className="w-64 h-64 flex flex-col justify-center items-center"> 
        <h1><b>Gun house</b></h1>
        <p>Welcome to the best gun house</p>
        <img src='https://wallpapercave.com/wp/wc1702449.jpg' alt="Gun" />
        <button className="bg-teal-400 p-2 rounded-lg m-6">Click me</button>
      </div>
      <div className="w-64 h-64  flex flex-col justify-center items-center"> 
        <h1><b>Gun house</b></h1>
        <p>Welcome to the best gun house</p>
        <img src='https://tradocnews.org/wp-content/uploads/2019/09/Daytona-Tactical-e1569925011279.jpg' alt="Gun" />
        <button className="bg-teal-400 p-2 rounded-lg m-6">Click me</button>
      </div>
      <div className="w-64 h-64 flex flex-col justify-center items-center"> 
        <h1><b>Gun house</b></h1>
        <p>Welcome to the best gun house</p>
        <img src='https://th.bing.com/th/id/OIP.TWjgYpiOBoUDezhW7AKLXwHaEK?w=1600&h=900&rs=1&pid=ImgDetMain' alt="Gun" />
        <button className=" bg-teal-400 p-2 rounded-lg m-8">Click me</button>
      </div>
      </div>
      </div>
      )

}

export default App;
