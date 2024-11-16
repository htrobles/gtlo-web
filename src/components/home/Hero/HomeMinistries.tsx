import Image from 'next/image';

const MINISTRIES = [
  {
    title: 'PRAISE AND WORSHIP',
    image: 'https://picsum.photos/seed/1/200/200',
    description: `Our Worship Ministry is centered on leading with integrity and cultivating a true heart of worship. We believe that worship is more than just music—it's a lifestyle of devotion and service to God. Our team is passionate about creating an atmosphere where people can encounter God's presence, offering their praise with sincerity and joy.`,
  },
  {
    title: 'KIDS MINISTRY',
    image: 'https://picsum.photos/seed/2/200/200',
    description: `We believe every child is a gift from God, and our Kids Ministry is dedicated to nurturing their faith in a fun, safe, and loving environment. Through interactive Bible lessons, creative activities, and joyful worship, we help kids grow in their love for Jesus while making new friends. Our team is passionate about partnering with parents to lay a strong spiritual foundation for the next generation.`,
  },
  {
    title: 'YOUTH MINISTRY',
    image: 'https://picsum.photos/seed/3/200/200',
    description: `Our Youth Ministry is a place where young people can discover their purpose, deepen their faith, and build lasting friendships. We create a vibrant, engaging atmosphere where teens can explore what it means to follow Jesus in a world full of challenges. Through dynamic worship, relevant Bible teaching, and exciting events, we empower our youth to grow spiritually and become confident, faith-filled leaders.`,
  },
  {
    title: 'MEDIA',
    image: 'https://picsum.photos/seed/4/200/200',
    description: `Our Media Ministry is dedicated to sharing the gospel and the love of Jesus Christ through various forms of media. By producing high-quality Christian content and materials, we aim to spread the message of Christ and promote values rooted in His teachings. Whether it’s through videos, social media, or other digital platforms, our team is passionate about creating inspiring and impactful content that reaches people wherever they are.`,
  },
  // {
  //   title: 'USHERING',
  //   image: 'https://picsum.photos/seed/5/200/200',
  //   description: `Our Ushering Ministry at Gospel Trend Church is dedicated to creating a welcoming, warm environment where everyone feels at home. We believe every encounter matters, and our team is committed to making each person who walks through our doors feel valued and embraced. Through genuine smiles, friendly greetings, and helpful assistance, our ushers ensure a positive experience that reflects God’s love.`,
  // },
  // {
  //   title: 'LOGISTICS',
  //   image: 'https://picsum.photos/seed/6/200/200',
  //   description: `Our Outreach Ministry at Gospel Trend Church is committed to sharing the gospel and the love of Jesus Christ across campuses and in the unreached communities of our city. We believe in reaching people right where they are, bringing hope and support through practical acts of service, encouragement, and faith. By partnering with like-minded organizations, we extend our impact to help, bless, and meet the needs of those we encounter.`,
  // },
  // {
  //   title: 'KITCHEN MINISTRY',
  //   image: 'https://picsum.photos/seed/7/200/200',
  //   description: `Our Kitchen Ministry is all about sharing nutritious, delicious meals that bring people together and foster genuine fellowship. We believe that gathering around the table not only nourishes the body but also strengthens relationships within our church family. Our team is passionate about preparing food that encourages connection, joy, and meaningful conversation.`,
  // },
];

export default function HomeMinistries() {
  return (
    <section className='py-12'>
      <div className='container mx-auto space-y-12'>
        <h2>Ministries</h2>
        <ul className='grid xl:grid-cols-2 gap-8'>
          {MINISTRIES.map(({ title, description, image }, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={title}
                className='grid grid-cols-1 md:grid-cols-5 md:gap-x-4 gap-y-4'
              >
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                  className={`aspect-video md:aspect-square rounded-lg w-full col-span-2 object-cover object-center ${
                    isLeft ? 'md:order-1' : 'md:order-2'
                  } xl:order-1`}
                />
                <div
                  className={`col-span-3 ${
                    isLeft ? 'md:order-2' : 'md:order-1'
                  } ${
                    isLeft ? 'md:text-left' : 'md:text-right'
                  } xl:order-2 xl:text-left`}
                >
                  <h4 className='mb-4'>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </ul>
        <button className='border-2 border-foreground px-8 py-4 rounded-xl hover:bg-foreground hover:text-white transition-colors'>
          Learn more about our ministries
        </button>
      </div>
    </section>
  );
}
