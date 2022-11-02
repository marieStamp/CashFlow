import React from "react";
import "../Category/category.scss";
import img1 from "../../images/Icons/IconsCatalog/1.png";
import img2 from "../../images/Icons/IconsCatalog/2.png";
import img3 from "../../images/Icons/IconsCatalog/3.png";
import img4 from "../../images/Icons/IconsCatalog/4.png";
import img5 from "../../images/Icons/IconsCatalog/5.png";
import img6 from "../../images/Icons/IconsCatalog/6.png";
import img7 from "../../images/Icons/IconsCatalog/7.png";
import img8 from "../../images/Icons/IconsCatalog/8.png";
import img9 from "../../images/Icons/IconsCatalog/9.png";
import img10 from "../../images/Icons/IconsCatalog/10.png";
import img11 from "../../images/Icons/IconsCatalog/11.png";
import img12 from "../../images/Icons/IconsCatalog/12.png";
import img13 from "../../images/Icons/IconsCatalog/13.png";
import img14 from "../../images/Icons/IconsCatalog/14.png";
import img15 from "../../images/Icons/IconsCatalog/15.png";
import houseImg from "../../images/Icons/house.png";
import foodImg from "../../images/Icons/food.png";
import sportImg from "../../images/Icons/sport.png";
import healthImg from "../../images/Icons/health.png";
import carImg from "../../images/Icons/car.png";
import clothImg from "../../images/Icons/cloth.png";
import lunchImg from "../../images/Icons/lunch.png";
import salaryImg from "../../images/Icons/salary.png";
import otherIncImg from "../../images/Icons/other_inc.png";

export interface Icon {
    id: number,
    img: string,
}

export const iconsCatalog: Icon[] = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    },
    {
        id: 7,
        img: img7,
    },
    {
        id: 8,
        img: img8,
    },
    {
        id: 9,
        img: img9,
    },
    {
        id: 10,
        img: img10,
    },
    {
        id: 11,
        img: img11,
    },
    {
        id: 12,
        img: img12,
    },
    {
        id: 13,
        img: img13,
    },
    {
        id: 14,
        img: img14,
    },
    {
        id: 15,
        img: img15,
    },
    {
        id: 16,
        img: houseImg,
    },
    {
        id: 17,
        img: foodImg,
    },
    {
        id: 18,
        img: sportImg,
    },
    {
        id: 19,
        img: healthImg,
    },
    {
        id: 20,
        img: carImg,
    },
    {
        id: 21,
        img: clothImg,
    },
    {
        id: 22,
        img: lunchImg,
    },
    {
        id: 23,
        img: salaryImg,
    },
    {
        id: 24,
        img: otherIncImg,
    }
]

interface PropsType {
    callBack: (img: string) => void
}

export const Icons: React.FC<PropsType> = (props) => {
    console.log(props);
    return (
        <>
        <div className='icons-cat'>
            <h2>Pick an icon</h2>
        </div>
        <div className="cat-block">
        {iconsCatalog.map((item) => (
            
            <div className="cat-item" key={item.id}
            onClick={() => props.callBack(item.img)}>
                <div className="cat-icon">
                    <img src={item.img} alt=""/>
                </div>
            </div> 
        ))
        }
        </div>
        </>
)}
