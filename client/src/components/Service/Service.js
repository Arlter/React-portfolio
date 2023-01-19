import React from 'react'
import "./service.css"
import {FcOk} from "react-icons/fc"

const Service = () => {

    const colors = [
        "#CD5C5C",
        "#6495ED",
        "#088f8f",
        "#36ff25",
        "#e48c6f",
        "#ab11ce",
        "#df5be7",
        "#FFE51E",
      ];

    const serviceData = [
        {
            id:1,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:2,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:3,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:4,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:5,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:6,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:7,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },

        {
            id:8,
            service1: "Web Development",
            service2: "Product Development",
            service3: "Software Development",
            service4: "Rapper",
        },


    ]
    
  return (
    <div className='container service-section' id="service">
    
        <div className='section-title'>
            <h5>Services</h5>
            <span className='line'></span>
        </div> 

        <div className='row'> 
            {serviceData.map((item, index) => (
                    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12' key={index}>
                        
                        <div className='services' >
                            <span className='service-number' style={{backgroundColor:colors[index]}}> {/* With height and width, bg color wont be visible*/}
                                <p>{item.id}</p>
                            </span>
                            
                            <div className='list-of-services'>
                                <p>
                                    <FcOk size={20} style={{margin:"5px"}} />
                                    {item.service1}
                                </p>

                                <span className='service-item-underline'></span>
                                <p>
                                    <FcOk size={20} style={{margin:"5px"}} />
                                    {item.service2}
                                </p>
                                <span className='service-item-underline'></span>
                                <p>
                                    <FcOk size={20} style={{margin:"5px"}} />
                                    {item.service3}
                                </p>
                                <span className='service-item-underline'></span>
                                <p>
                                    <FcOk size={20} style={{margin:"5px"}} />
                                    {item.service4}
                                </p>
                                 
                            </div>

                        </div>

                    </div>

            
            ))}
        </div>

    </div>
  )
}

export default Service