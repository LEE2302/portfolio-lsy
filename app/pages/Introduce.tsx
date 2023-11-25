import Content from '@/components/introduce/Content'
import Title from '@/components/introduce/Title'
import Image from 'next/image'

function Introduce() {
  return (
    <section className="w-pull text-center bg-white">
      <div className="p-10 flex justify-center items-center">
        <div className="mr-10 image-box">
          <Image src={'/images/profile.jpeg'} alt="profile" width={300} height={300} />
        </div>
        <div>
          <Title />
          <Content />
        </div>
      </div>
    </section>
  )
}

export default Introduce
