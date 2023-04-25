import { useEffect } from "react";
import { diva } from "../../global";
import traffic from '../../assets/asset/traffic.png';
const OverLay = () => {


    useEffect(() => {
        diva.client.request("CreateEntity", {
            group: "/覆盖物/三维图片",
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
            property: {
                color: [255, 255, 255],
                emissive: 1,
                opacity: 1,
                url: traffic,
            }
        }.then((res) => res));
    })
    return (
        <div>12313123</div>
    )
}

export default OverLay;