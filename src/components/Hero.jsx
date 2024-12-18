const Hero = () => {
  return (
    <section className="bg-gray-200 pt-20 lg:pt-32" id="home">
      <div className="container section items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="">
            <p className="text-blue-600 text-lg font-semibold mb-4">Wesley KAMATHE</p>
            <h1 className="text-4xl font-extrabold">DEVELOPEUR INFORMATIQUE</h1>
            <ul className="mt-6 space-y-2">
              <li><a href="#" className="flex items-center text-lg hover:text-blue-600">Web</a></li>
              <li><a href="#" className="flex items-center text-lg hover:text-blue-600">Mobile</a></li>
              <li><a href="#" className="flex items-center text-lg hover:text-blue-600">Software</a></li>
            </ul>
            <ul className="mt-6 -ml-1">

              <li className="flex items-center space-x-2">
                <strong className="strong">5+</strong>

                <span className="span">
                  Ans<br></br>
                  d&lsquo;experience
                </span>
              </li>
            </ul>
        </div>
        <figure className="w-full lg:max-w-[320px] lg:ml-auto mx-auto rounded-lg bg-gradient-to-b items-center from-gray-100 to-blue-600 inline-block" style={{transform: 'rotate(-10deg)'}}>
          <img src="/images/portrait.png" width={640} height={840} alt="" className="w-full" style={{transform: 'rotate(20deg)'}} />
        </figure>
      </div>
    </section>
  )
}

export default Hero