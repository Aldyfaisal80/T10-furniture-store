import vh3Product1 from "../../../public/assets/images/card-product1.png"
import vh3Product2 from "../../../public/assets/images/card-product2.png"
import vh3Product3 from "../../../public/assets/images/card-product3.png"
import vh3Product4 from "../../../public/assets/images/card-product4.png"
import vh3Product5 from "../../../public/assets/images/card-product5.png"
import vh3Product6 from "../../../public/assets/images/card-product6.png"
import vh3Product7 from "../../../public/assets/images/card-product7.png"
import vh3Product8 from "../../../public/assets/images/card-product8.png"

import { BsPlusCircleFill } from "react-icons/bs";
import Card from "../elements/CardProducts"

export default function ProductCard() {
    return (
        <div className="flex flex-wrap w-[1600px] justify-between gap-[30px] items-center">
            <Card>
                <Card.CardImg img={vh3Product1} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product2} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product3} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product4} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product5} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product6} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product7} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
            <Card>
                <Card.CardImg img={vh3Product8} />
                <Card.CardDesc title="Long Chair" price="$100.00" icon={<BsPlusCircleFill />} />
            </Card>
        </div>
    )
}
