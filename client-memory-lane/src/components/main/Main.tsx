import MediaContainer from "./MediaContainer"


const allTexts = [
  
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi inventore! Officiis doloremque qui accusantium optio debitis accusamus, esse autem quisquam soluta reiciendis numquam recusandae quos cum pariatur placeat tempora."
  
  ]

export default function Main() {


    return (
        <>        
        <main className="bg-gray-500 w-[70%] mt-[5%] h-[80vh] mb-32  flex flex-col overflow-y-scroll p-10">

        
        <MediaContainer imagePath={"/image4.png"} text={allTexts[1]}></MediaContainer>
        <MediaContainer imagePath={"/image1.png"} text={allTexts[0]}></MediaContainer>
        <MediaContainer imagePath={"/image2.png"} text={allTexts[0]}></MediaContainer>
        <MediaContainer imagePath={"/image3.png"} text={allTexts[2]}></MediaContainer>
        <MediaContainer imagePath={"/image5.png"} text={allTexts[4]}></MediaContainer>
        <MediaContainer imagePath={"/image1.png"} text={allTexts[5]}></MediaContainer>
        <MediaContainer imagePath={"/image2.png"} text={allTexts[1]}></MediaContainer>
        <MediaContainer imagePath={"/image3.png"} text={allTexts[2]}></MediaContainer>
        <MediaContainer imagePath={"/image4.png"} text={allTexts[3]}></MediaContainer>
        <MediaContainer imagePath={"/image5.png"} text={allTexts[4]}></MediaContainer>





        </main>
        </>
    )
}