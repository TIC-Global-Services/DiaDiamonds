type Variant = "YG" | "RG" | "S";

type Size = "XS" | "S" | "M";

type VariantOption = {
  img: string
  text: string
}

type Item = {
  name: string
  miniDes: Record<Variant, string>

  type: string

  variants: VariantGroup[]

  currentVar: Variant

  size: Size[]
  currentSize: Size

  listedPoints: Array<
    | Record<Variant, string>
    | Record<Size, string>
  >

  images: {
    img1: string
    img2: string
    img3: string
    img4: string
  }

  variantImg: Record<Variant, string>
}

type VariantGroup = Record<Variant, VariantOption>


export const ItemData:Record<number, Item> = {

    3:{
        name:'Engagement Ring',
        miniDes:{
            YG:"Ring in Yellow Gold with Diamonds",
            RG:"Ring in Rose Gold with Diamonds",
            S:"Ring in Silver with Diamonds",
        },
        type:"Round Brilliant Cut",
        variants:[
            {
                YG:{
                    img:"/assets/img/Collections/DedicatedPage/ring1.jpg",
                    text:"Yellow Gold",
                },
                RG:{
                    img:"/assets/img/Collections/DedicatedPage/ring2.jpg",
                    text:"Rose Gold",
                },
                S:{
                    img:"/assets/img/Collections/DedicatedPage/ring3.jpg",
                    text:"Silver",
                },
            }
        ],
        currentVar : "YG",
        size : ["XS", "S", "M"],
        currentSize : "XS",
        listedPoints : [
            {
                YG:"Yellow gold with diamonds",
                RG:"Rose gold with diamonds",
                S:"Silver with diamonds",
            },
            {
                XS:"Finger size, XS",
                S:"Finger size, Small",
                M:"Finger size, Medium",
            },
            {
                XS:"Fits Finger up to 0.0",
                S:"Fits Finger up to 0.0",
                M:"Fits Finger up to 0.0",
            }
        ],
        images:{
            img1:"/assets/img/Collections/DedicatedPage/bgImage1.png",
            img2:"/assets/img/Collections/DedicatedPage/bgImage2.png",
            img3:"/assets/img/Collections/DedicatedPage/bgImage3.png",
            img4:"/assets/img/Collections/DedicatedPage/bgImage4.jpg",
        },
        variantImg : {
            YG : "/assets/img/Collections/DedicatedPage/ring1.jpg",
            RG : "/assets/img/Collections/DedicatedPage/ring2.jpg",
            S : "/assets/img/Collections/DedicatedPage/ring3.jpg",
        }

    }
}