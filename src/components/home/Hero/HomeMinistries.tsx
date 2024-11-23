// import { Button } from '@/components/ui/button';
import Image from 'next/image';
import praiseAndWorshipImg from '/public/ministries/praise-and-worship.jpeg';
import kidsImg from '/public/ministries/kids.jpeg';
import youthImg from '/public/ministries/youth.jpeg';
import ministriesImg from '/public/ministries/media.jpg';
import usherImg from '/public/ministries/usher.jpeg';
import logisticsImg from '/public/ministries/logistics.jpeg';
import kitchenImg from '/public/ministries/kitchen.jpeg';
const MINISTRIES = [
  {
    title: 'PRAISE AND WORSHIP',
    image: praiseAndWorshipImg,
    description: `Our Worship Ministry is centered on leading with integrity and cultivating a true heart of worship. We believe that worship is more than just music—it's a lifestyle of devotion and service to God. Our team is passionate about creating an atmosphere where people can encounter God's presence, offering their praise with sincerity and joy.`,
  },
  {
    title: 'KIDS MINISTRY',
    image: kidsImg,
    description: `We believe every child is a gift from God, and our Kids Ministry is dedicated to nurturing their faith in a fun, safe, and loving environment. Through interactive Bible lessons, creative activities, and joyful worship, we help kids grow in their love for Jesus while making new friends. Our team is passionate about partnering with parents to lay a strong spiritual foundation for the next generation.`,
  },
  {
    title: 'YOUTH MINISTRY',
    image: youthImg,
    description: `Our Youth Ministry is a place where young people can discover their purpose, deepen their faith, and build lasting friendships. We create a vibrant, engaging atmosphere where teens can explore what it means to follow Jesus in a world full of challenges. Through dynamic worship, relevant Bible teaching, and exciting events, we empower our youth to grow spiritually and become confident, faith-filled leaders.`,
  },
  {
    title: 'MEDIA',
    image: ministriesImg,
    description: `Our Media Ministry is dedicated to sharing the gospel and the love of Jesus Christ through various forms of media. By producing high-quality Christian content and materials, we aim to spread the message of Christ and promote values rooted in His teachings. Whether it’s through videos, social media, or other digital platforms, our team is passionate about creating inspiring and impactful content that reaches people wherever they are.`,
  },
  {
    title: 'USHERING',
    image: usherImg,
    description: `Our Ushering Ministry at Gospel Trend Church is dedicated to creating a welcoming, warm environment where everyone feels at home. We believe every encounter matters, and our team is committed to making each person who walks through our doors feel valued and embraced. Through genuine smiles, friendly greetings, and helpful assistance, our ushers ensure a positive experience that reflects God’s love.`,
  },
  {
    title: 'LOGISTICS',
    image: logisticsImg,
    description: `Our Outreach Ministry at Gospel Trend Church is committed to sharing the gospel and the love of Jesus Christ across campuses and in the unreached communities of our city. We believe in reaching people right where they are, bringing hope and support through practical acts of service, encouragement, and faith. By partnering with like-minded organizations, we extend our impact to help, bless, and meet the needs of those we encounter.`,
  },
  {
    title: 'KITCHEN MINISTRY',
    image: kitchenImg,
    description: `Our Kitchen Ministry is all about sharing nutritious, delicious meals that bring people together and foster genuine fellowship. We believe that gathering around the table not only nourishes the body but also strengthens relationships within our church family. Our team is passionate about preparing food that encourages connection, joy, and meaningful conversation.`,
  },
];

export default function HomeMinistries() {
  return (
    <section id='ministries' className='py-12 bg-gray-50'>
      <div className='container mx-auto space-y-12'>
        <h2>Ministries</h2>
        <ul className='grid xl:grid-cols-2 gap-8'>
          {MINISTRIES.map(({ title, description, image }, i) => {
            const isLeft = i % 2 === 0;

            let objectPosition = 'object-center';

            if (i === 0 || i === 4) {
              objectPosition = 'object-top';
            }

            return (
              <div
                key={title}
                className='grid grid-cols-1 md:grid-cols-5 md:gap-x-4 gap-y-4'
              >
                <div
                  className={`col-span-2 ${
                    isLeft ? 'md:order-1' : 'md:order-2'
                  } xl:order-1`}
                >
                  <h3 className='md:hidden mb-4'>{title}</h3>
                  <Image
                    src={image}
                    alt={title}
                    className={`aspect-video md:aspect-square rounded-lg w-full object-cover ${objectPosition}`}
                  />
                </div>
                <div
                  className={`col-span-3 flex flex-col ${
                    isLeft ? 'md:order-2' : 'md:order-1'
                  } ${
                    isLeft
                      ? 'md:items-start text-left'
                      : 'md:items-end text-right'
                  } xl:order-2 xl:items-start lg:text-left`}
                >
                  <h3 className='hidden md:block mb-4'>{title}</h3>
                  <p className='md:max-w-96 xl:max-w-none'>{description}</p>
                </div>
              </div>
            );
          })}
        </ul>
        {/* <Button variant='outlineBlack'>Learn more about our ministries</Button> */}
      </div>
    </section>
  );
}
