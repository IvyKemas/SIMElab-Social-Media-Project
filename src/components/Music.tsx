import musicImg from "../assets/images/music.jpg";
import politicsImg from "../assets/images/politics.jpg";
import celebImg from "../assets/images/celebrities.jpg";

const topics = {
  music: [
    {
      id: 1,
      title:
        "Universal Music Group acquires major stake in Afrobeats label Mavin Global",
      description:
        "Universal Music Group (UMG), a global music powerhouse, has revealed its acquisition of a majority stake in Mavin Global, a prominent Nigerian record label based in Lagos. The announcement was\u2026",
      link: "https://www.ghafla.com/ke/universal-music-group-acquires-major-stake-in-afrobeats-label-mavin-global/",
      imageUrl: { musicImg },
    },
    {
      id: 2,
      title:
        "The gospel musician who wrote the profane song \u201cYesu Ninyandue\u201d talks",
      description:
        "Eldoret-based Gospel singer William Getumbe has stirred controversy with his latest song \u2018Yesu Ninyandue,\u2019 drawing criticism from Kenyans who perceive it as blasphemous and a mockery of Christianity. The lyrics\u2026",
      link: "https://www.ghafla.com/ke/the-gospel-musician-who-wrote-the-profane-song-yesu-ninyandue-talks/",
      imageUrl: { musicImg },
    },
    {
      id: 3,
      title:
        "Kenyan artist leaves mark on Country Music scene with a Soul-stirring Gospel Hit",
      description:
        "Country music endears for its timelessness, authenticity, innovation and cultural significance. The genre boasts universal themes around love, freedom and social justice. Country music\u2019s deepest touch, though \u2013 comes along\u2026",
      link: "https://www.ghafla.com/ke/kenyan-artist-leaves-mark-on-country-music-scene-with-a-soul-stirring-gospel-hit/",
      imageUrl: { musicImg },
    },
  ],
  Celebrities: [
    {
      id: 1,
      title:
        "List Of Celebrities Who Spend Hefty Amounts Of Money On Their Pets",
      description:
        "Most people have conglomerated pets into their lives for companion, entertainment & company. There are varieties to choose from. For some, their pets mean a lot & they can spend\u2026",
      link: "https://www.ghafla.com/ke/list-of-celebrities-who-spend-hefty-amounts-of-money-on-their-pets/",
      imageUrl: { celebImg },
    },
    {
      id: 2,
      title: "List Of Celebrities Aged 30+ Without Kids",
      description:
        "A good number of celebrities do not cosset the thought of having babies and getting married while they\u2019re concentrating on their careers. Some of them end up being single by\u2026",
      link: "https://www.ghafla.com/ke/list-of-celebrities-aged-30-without-kids/",
      imageUrl: { celebImg },
    },
    {
      id: 3,
      title: "5 Kenyan celebrities who are great examples of masculinity",
      description:
        "When you think of masculinity which celebrities come to mind? That is a question I had asked a couple of my friends as we sat down having some rather interesting\u2026",
      link: "https://www.ghafla.com/ke/5-kenyan-celebrities-who-are-great-examples-of-masculinity/",
      imageUrl: { celebImg },
    },
  ],
  Politics: [
    {
      id: 1,
      title: "Cebbie Nyasego Sets Her Sights on Politics",
      description:
        "Elseba Awour, better known as Cebbie Nyasego, has set her sights on a new path: politics. The sister of renowned Kenyan singer Akothee has been interested in politics since she\u2026",
      link: "https://www.ghafla.com/ke/cebbie-nyasego-sets-her-sights-on-politics/",
      imageUrl: { politicsImg },
    },
    {
      id: 2,
      title:
        "Jalang\u2019o is learning that politics doesn\u2019t end after winning elections",
      description:
        "Jalang\u2019o proved all his detractors from when he won the Lang\u2019ata parliamentary seat. And this victory flew in the face of not just naysayers but political pundits who felt it\u2026",
      link: "https://www.ghafla.com/ke/jalango-is-learning-that-politics-doesnt-end-after-winning-elections/",
      imageUrl: { politicsImg },
    },
    {
      id: 3,
      title:
        "Power of dressing: Karen Nyamu needs to know fashion and politics go hand in hand",
      description:
        "Karen Nyamu almost lost her senate job following an altercation she had with her baby daddy\u2019s wife, Edday Nderitu a few weeks back in Dubai and from the videos \u2013\u2026",
      link: "https://www.ghafla.com/ke/power-of-dressing-karen-nyamu-needs-to-know-fashion-and-politics-go-hand-in-hand/",
      imageUrl: { politicsImg },
    },
  ],
};

// create the card
interface Topic {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}
function generateCard({ id, title, description, link, imageUrl }: Topic) {
  return (
    <div key={id} className="row">
      {id === 2 ? (
        <>
          <div className="col-7 col-md-6">
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={link} className="btn btn-outline-warning" type="button">
              Read More
            </a>
          </div>
          <div className="col-3 col-md-4">
            <img src={imageUrl} className="img-fluid" alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="col-3 col-md-4">
            <img src={imageUrl} className="img-fluid" alt={title} />
          </div>
          <div className="col-7 col-md-6">
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={link} className="btn btn-outline-warning" type="button">
              Read More
            </a>
          </div>
        </>
      )}
    </div>
  );
}

//

function Music() {
  const cards = [
    ...topics.music.map((topic) => ({ ...topic, imageUrl: musicImg })),
    ...topics.Celebrities.map((topic) => ({ ...topic, imageUrl: celebImg })),
    ...topics.Politics.map((topic) => ({ ...topic, imageUrl: politicsImg })),
  ];

  return (
    <>
      <div className="card-container">
        {cards.map((card) => generateCard(card))}
      </div>
    </>
  );
}
export default Music;
