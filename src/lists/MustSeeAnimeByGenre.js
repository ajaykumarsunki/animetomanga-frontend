import React from "react";

import ImgAnother from "../img/mustSeeAnimeByGenre/another.jpg";
import ImgCodegeass from "../img/mustSeeAnimeByGenre/codegeass.jpg";
import ImgDFrag from "../img/mustSeeAnimeByGenre/d-frag.webp";
import ImgDeathnote from "../img/mustSeeAnimeByGenre/deathnote.jpg";
import ImgErased from "../img/mustSeeAnimeByGenre/erased.jpg";
import ImgFairytail from "../img/mustSeeAnimeByGenre/fairytail.jpg";
import ImgFatezero from "../img/mustSeeAnimeByGenre/fatezero.jpg";
import ImgHunterXhunter from "../img/mustSeeAnimeByGenre/hunter-x-hunter.jpg";
import ImgKimiNoNawa from "../img/mustSeeAnimeByGenre/kimi-no-nawa.jpg";
import ImgKonosuba from "../img/mustSeeAnimeByGenre/konosuba.jpg";
import ImgKuroko from "../img/mustSeeAnimeByGenre/kuroko.jpg";
import ImgNejimakiseireisenki from "../img/mustSeeAnimeByGenre/nejimakiseireisenki.jpg";
import ImgNodame from "../img/mustSeeAnimeByGenre/nodame.jpg";
import ImgRezero from "../img/mustSeeAnimeByGenre/rezero.jpg";
import ImgSaekano from "../img/mustSeeAnimeByGenre/saekano.jpg";
import ImgSAO from "../img/mustSeeAnimeByGenre/SAO.jpg";
import ImgShiki from "../img/mustSeeAnimeByGenre/shiki.jpg";
import ImgSteinsgate from "../img/mustSeeAnimeByGenre/steinsgate.jpg";
import ImgToradora from "../img/mustSeeAnimeByGenre/toradora.jpg";
import ImgWorking from "../img/mustSeeAnimeByGenre/working.jpg";

export default function MustSeeAnimeByGenre() {
  return (
    <div className="body__list">
      <nav id="nav" className="mustSeeAnimeByGenre">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a href="/" className="nav__menu-item nav__menu-item--logo">
              animetomanga
            </a>
          </li>
          <li className="nav__menu-item">
            <a href="#" className="nav__menu-item--link">
              Lists
            </a>
          </li>
          <li className="nav__menu-item">
            <a href="#" className="nav__menu-item--link">
              Reviews
            </a>
          </li>
          <li className="nav__menu-item">
            <input
              className="nav__menu-item--search-input"
              placeholder="Type and hit Enter"
            />
            <a href="#" className="nav__menu-item--search-link">
              <i className="fas fa-search fa-sm"></i>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="section-articles font-color-white">
          <article className="article">
            <p className="article__genre">1.ACTION</p>
            <p className="article__series-title">Fate/Zero</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgFatezero} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> With the promise of
                granting any wish, the omnipotent Holy Grail triggered three
                wars in the past, each too cruel and fierce to leave a victor.
                The wealthy Einzbern family hired the much hated "Magus Killer"
                Kiritsugu Emiya with marriage to their only daughter Irisviel as
                binding contract, in order to obtain the Holy Grail. Kiritsugu
                now stands at the center of a cutthroat game of survival, facing
                off against six other participants, each armed with an ancient
                familiar, and fueled by unique desires and ideals.
              </p>

              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Seven masters
                summon one ancient hero either from history or mythology. A
                survival game where basically anything can happen. The
                storytelling just draws you in and keeps you there. Dark theme,
                yet rich and colorful animation. Good soundtrack. And to top it
                all, AWESOME ACTION. The battle scenes are very well done, they
                keep you thrilled throughout, but at the same time don't go too
                deep into martial art specific details that could unnaturally
                prolong the narration and the fights. If you like thrilling
                action, you cannot go wrong with Fate/Zero.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">2.ADVENTURE</p>
            <p className="article__series-title">Hunter x Hunter (2011)</p>
            <div className="article__poster">
              <img
                className="article__poster--img"
                src={ImgHunterXhunter}
                alt=""
              />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Hunter x Hunter is set
                in a world where Hunters exist to perform all manner of
                dangerous tasks like capturing criminals and bravely searching
                for lost treasures in uncharted territories. Twelve-year-old Gon
                Freecss is determined to become the best Hunter possible in
                hopes of finding his father, who was a Hunter himself and had
                long ago abandoned his young son. However, Gon soon realizes the
                path to achieving his goals is far more challenging than he
                could have ever imagined.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Although I've
                tried to not include really long series in this list, I just
                couldn't leave out Hunter x Hunter. There are 148 episodes.
                Long, yes, but totally worth the watch. Worthy of the title
                "masterpiece", you will be very quickly caught by the pacing of
                the show in just 3-4 episodes, and most of the episodes leave
                you wanting more. This will put you in the much desired "Just
                one more episode..." mode. The synopsis above is enough of an
                intro to this one, the strength lies in the ADVENTUREs of our
                little Gon (the MC).
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">3.COMEDY</p>
            <p className="article__series-title">
              Kono Subarashii Sekai ni Shukufuku wo! (KonoSuba: God's Blessing
              on This Wonderful World!)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgKonosuba} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> After dying a laughable
                and pathetic death on his way back from buying a game, high
                school student and recluse Kazuma Satou finds himself sitting
                before a beautiful but obnoxious goddess named Aqua. She
                provides the NEET with two options: continue on to heaven or
                reincarnate in every gamer's dream-a real fantasy world!
                Choosing to start a new life, Kazuma is quickly tasked with
                defeating a Demon King who is terrorizing villages. But before
                he goes, he can choose one item of any kind to aid him in his
                quest, and the future hero selects Aqua. But Kazuma has made a
                grave mistake-Aqua is completely useless!
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> I've seen
                anime that are honestly much funnier than Konosuba, but this
                show has a very special place in my heart. Let's just say I have
                personally watched both seasons atleast 7 times (Ahem! I am not
                a NEET!!) and enjoyed it every time. There's just something
                special here that makes you want to watch the lovably weird
                characters keep causing trouble for themselves time and again,
                despite working really hard. Konosuba also falls under Fantasy /
                Game genres. It's hilarious throughout and has tremendous
                rewatch value. Watch Konosuba when you want to just chill and
                forget everything around you.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">
              4.FANTASY / PARALLEL WORLD (ISEKAI)
            </p>
            <p className="article__series-title">
              Re:Zero kara Hajimeru Isekai Seikatsu (Re:ZERO -Starting Life in
              Another World)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgRezero} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> When Subaru Natsuki
                leaves the convenience store, the last thing he expects is to be
                wrenched from his everyday life and dropped into a fantasy
                world. Things aren't looking good for the bewildered teenager;
                however, not long after his arrival, he is attacked by some
                thugs. Armed with only a bag of groceries and a now useless cell
                phone, he is quickly beaten to a pulp. Fortunately, a mysterious
                beauty named Satella, in hot pursuit after the one who stole her
                insignia, happens upon Subaru and saves him. In order to thank
                the honest and kindhearted girl, Subaru offers to help in her
                search, and later that night, he even finds the whereabouts of
                that which she seeks. But unbeknownst to them, a much darker
                force stalks the pair from the shadows, and just minutes after
                locating the insignia, Subaru and Satella are brutally murdered.
                However, Subaru immediately reawakens to a familiar
                scene-confronted by the same group of thugs, meeting Satella all
                over again-the enigma deepens as history inexplicably repeats
                itself.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Four letters.
                E.P.I.C. That's exactly what and how I felt after I finished
                watching Re:Zero. This anime took the entire anime community by
                storm when it came out, and it fully desrves all the attention.
                There's a lot of anime that you enjoy watching, and then there's
                the rare gem that you actually get lost in. You feel everything
                the MC does. You feel love when the MC admires the heroine in
                his mind. You feel fear when the MC is in mortal danger. You
                feel pain when the MC is told he's not needed. You don't watch
                such gems, you LIVE. And such anime are RARE. Re:Zero kara
                Hajimeru Isekai Seikatsu is certainly one of them. It's a real
                fantasy world. Every character has a character of its own,
                instead of just serving its purpose of making the MC look like
                the MC. It's a story that's full of emotions. THE STUFF THAT
                DEFINES A MASTERPIECE. ONE HELL OF A RIDE. ENOUGH SAID.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">5.HAREM</p>
            <p className="article__series-title">
              Saenai Heroine no Sodatekata (Saekano: How to Raise a Boring
              Girlfriend)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgSaekano} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Tomoya Aki, an otaku,
                has been obsessed with collecting anime and light novels for
                years, attaching himself to various series with captivating
                stories and characters. Now, he wants to have a chance of
                providing the same experience for others by creating his own
                game, but unfortunately, Tomoya cannot do this task by himself.
                He successfully recruits childhood friend Eriri Spencer Sawamura
                to illustrate and literary elitist Utaha Kasumigaoka to write
                the script for his visual novel, while he directs. Super-group
                now in hand, Tomoya only needs an inspiration to base his
                project on, and luckily meets the beautiful, docile Megumi
                Katou, who he then models his main character after. Using what
                knowledge he has, Tomoya creates a new doujin circle with hopes
                to touch the hearts of those who play their game. What he does
                not realize, is that to invoke these emotions, the creators have
                had to experience the same feelings in their own lives.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Just in case
                you never heard the word "Harem", it is a genre in anime where
                the MC (not necessarily a guy) is liked, loved, wanted and
                chased by a number of heroines (again, assuming the MC is a
                guy). So yeah, it's the typical wonderland every teenage boy
                wants to be in. Saekano follows this trope really well. There is
                not much in terms of "plot", the synopsis above pretty much
                covers it. But make no mistake, Saekano is thoroughly
                entertaining throughout the 2 seasons. It has a fresh feel to
                it, considering the endless number of anime that also include
                some kind of harem situation. The art is also notably different
                from most.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">6.MYSTERY</p>
            <p className="article__series-title">
              Boku dake ga Inai Machi (ERASED)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgErased} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> When tragedy is about to
                strike, Satoru Fujinuma finds himself sent back several minutes
                before the accident occurs. The detached, 29-year-old manga
                artist has taken advantage of this powerful yet mysterious
                phenomenon, which he calls "Revival," to save many lives.
                However, when he is wrongfully accused of murdering someone
                close to him, Satoru is sent back to the past once again, but
                this time to 1988, 18 years in the past. Soon, he realizes that
                the murder may be connected to the abduction and killing of one
                of his classmates, the solitary and mysterious Kayo Hinazuki,
                that took place when he was a child. This is his chance to make
                things right. Boku dake ga Inai Machi follows Satoru in his
                mission to uncover what truly transpired 18 years ago and
                prevent the death of his classmate while protecting those he
                cares about in the present.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> A good
                mystery MUST keep the viewer wanting to know. And ERASED excels
                at that. When Satoru is sent back in time, he desperately tries
                to figure out what exactly happened to his deceased classmate
                Kayo. One of the interesting parts of the story is that he does
                so as an eleven year old child, and the only allies he has are
                his eleven year old classmates. The title ERASED itself has a
                deep meaning in the plot, but I really don't want to spoil this
                gem of a Mystery. Highly recommended to watch on a weekend, late
                night. You will probably finish the 12 episodes by morning.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">7.SCI-FI</p>
            <p className="article__series-title">Steins;Gate</p>
            <div className="article__poster">
              <img
                className="article__poster--img"
                src={ImgSteinsgate}
                alt=""
              />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> The self-proclaimed mad
                scientist Rintarou Okabe rents out a room in a rickety old
                building in Akihabara, where he indulges himself in his hobby of
                inventing prospective "future gadgets" with fellow lab members:
                Mayuri Shiina, his air-headed childhood friend, and Hashida
                Itaru, a perverted hacker nicknamed "Daru." The three pass the
                time by tinkering with their most promising contraption yet, a
                machine dubbed the "Phone Microwave," which performs the strange
                function of morphing bananas into piles of green gel. Though
                miraculous in itself, the phenomenon doesn't provide anything
                concrete in Okabe's search for a scientific breakthrough; that
                is, until the lab members are spurred into action by a string of
                mysterious happenings before stumbling upon an unexpected
                success-the Phone Microwave can send emails to the past,
                altering the flow of history.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Ever seen a
                time-travel themed movie/tv show and thought "Oh! That's pretty
                cool how they came up with that!"? Well, hold that thought. And
                now hop onto the awesome time-travel themed roller coaster
                called Steins;Gate. Because this one does NOT go easy on you, in
                many ways. It gets technical and explains the whole theory and
                ideas behind the "time machine" involved. Everytime you think
                things to go in a certain way, they probably won't. It may start
                and feel like a typical slice-of-life comedy at first, but it
                WILL get you. And you WON'T be able to escape. As Okabe Rintarou
                deperately tries to change the past / future (yes, I'm not sure
                if it's the past or the future that's being affected there), he
                almost loses his mind due to helplessness with every attempt.
                And SO DO YOU!! (again, ALMOST ;))
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">8.SUPERNATURAL</p>
            <p className="article__series-title">Shiki</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgShiki} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Fifteen-year-old Megumi
                Shimizu dreamed of a glamorous life in the big city; however,
                her unexpected death in the quiet village of Sotoba marks the
                beginning of what appears to be a ferocious epidemic that turns
                the hot summer into a season of blood and terror. A young doctor
                named Toshio Ozaki begins to doubt the nature of the disease and
                comes to understand that to discover the truth, he must abandon
                his humanity. Meanwhile, Natsuno Yuuki, an antisocial youth from
                the city, is haunted by the sudden death of Megumi and must
                realize the pain of friendship in the face of his own tragedy.
                Toshio and Natsuno form an unlikely pair as they work together
                to save Sotoba before it transforms into a ghost town of
                vampires.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> It's very
                easy to come across the "supernatural" theme in anime. It's not
                exactly a rare genre, and it's quite popular too. But I picked
                Shiki simply because it is so good at setting the "supernatural"
                atmosphere. Most vampire-themed movies / tv shows make it a
                point to show the vampires as cool and not-so-scary. But think
                about it, if vampires were real, would you REALLY think they're
                cool? Wouldn't you be scared to leave your house at night just
                because they might be out there somewhere? Well, Shiki gives off
                exactly that kind of vibe. It gets pretty creepy and frankly
                scary at times, and the show does this so naturally that I can't
                help but admire the direction for it. Like everything else on
                this list, I am confident Shiki will be appealing to most people
                looking for a supernatural themed experience.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">9.SPORTS</p>
            <p className="article__series-title">
              Kuroko no Basuke (Kuroko's Basketball)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgKuroko} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Teikou Junior High
                School's basketball team is crowned champion three years in a
                row thanks to five outstanding players who, with their
                breathtaking and unique skills, leave opponents in despair and
                fans in admiration. However, after graduating, these teammates,
                known as "The Generation of Miracles", go their separate ways
                and now consider each other as rivals. At Seirin High School,
                two newly recruited freshmen prove that they are not ordinary
                basketball players: Taiga Kagami, a promising player returning
                from the US, and Tetsuya Kuroko, a seemingly ordinary student
                whose lack of presence allows him to move around unnoticed.
                Although Kuroko is neither athletic nor able to score any
                points, he was a member of Teikou's basketball team, where he
                played as the "Phantom Sixth Man," who easily passed the ball
                and assisted his teammates.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> When you
                think of sports drama, you think team spirit. (Hellish) Practice
                sessions. (Cute but scary) Coaches. Unsurpassable opponents
                (which are of course surpassed right away by the heroes).
                Talented players. Not so talented but hard working players
                competing with talented players. And "when did he get there?".
                Also, "how is that even possible?"... Kuroko no Basuke has all
                that, and more. I never played basketball nor was I ever
                interested in basketball (no offense intended), and then I saw
                Kuroko on this show. Needless to say, the show is unique in how
                Kuroko does things and even someone with little knowledge about
                basketball can see that. I can only imagine how you might feel
                if you've actually played the sport. Highly recommended.
                Thoroughly entertaining. And, "when did he get there?" (:))
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">10.SLICE OF LIFE</p>
            <p className="article__series-title">Working!! (Wagnaria!!)</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgWorking} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Due to his love for
                small, cute things, Souta Takanashi cannot turn childlike Popura
                Taneshima down when she recruits him to work for Wagnaria, a
                family restaurant located in Hokkaido. Takanashi takes
                particular joy in doting on the older Popura, which only fuels
                her complex over how young she looks. He also quickly learns he
                must stay on his toes once he meets the rest of his colleagues,
                including the katana-wielding floor chief Yachiyo Todoroki, the
                intimidating head chef Jun Satou, the dangerously well-informed
                and subtly sadistic sous chef Hiroomi Souma, the adamantly lazy
                manager Kyouko Shirafuji, and the waitress Mahiru Inami who has
                a "painful" fear of men. Powered by an eccentric cast, Working!!
                is a unique workplace comedy that follows the never-dull
                happenings within the walls of Wagnaria as Takanashi and his
                co-workers' quirky personalities combine to create non-stop
                antics, shenanigans, and hilarity.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> "Slice of
                Life" is a genre where nothing really happens, yet you are
                entertained. This is the genre you look for when you don't want
                anything complicated. It's perfect for times when you want to
                just sit back and relax watching the daily lives of the
                characters. The Working!! (Wagnaria) series has a total of 4
                seasons (including www.Working!!), all of which have the same
                theme - the MC works part-time at a family restaurant full of
                normal-looking weirdos. And out of that come hilarious
                situations. And repeat. I for one am obviously a big fan of the
                series for the quality of humour. So highly recommended.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">11.ROMANCE / ROMANTIC COMEDY</p>
            <p className="article__series-title">Toradora!</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgToradora} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Ryuuji Takasu is a
                gentle high school student with a love for housework; but in
                contrast to his kind nature, he has an intimidating face that
                often gets him labeled as a delinquent. On the other hand is
                Taiga Aisaka, a small, doll-like student, who is anything but a
                cute and fragile girl. Equipped with a wooden katana and feisty
                personality, Taiga is known throughout the school as the
                "Palmtop Tiger." One day, an embarrassing mistake causes the two
                students to cross paths. Ryuuji discovers that Taiga actually
                has a sweet side: she has a crush on the popular vice president,
                Yuusaku Kitamura, who happens to be his best friend. But things
                only get crazier when Ryuuji reveals that he has a crush on
                Minori Kushieda-Taiga's best friend! Toradora! is a romantic
                comedy that follows this odd duo as they embark on a quest to
                help each other with their respective crushes, forming an
                unlikely alliance in the process.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Although
                serious romance does exist in anime, it's pretty common to see a
                lot of comedy with it. This makes the "Romance" genre almost
                synonymous with "Romantic Comedy" or "Romcom" in short. And
                Toradora! is a classic School Romcom. Toradora literally means
                Tiger (Tora) and Dragon (Dora). Those are the main characters'
                nicknames in school. The story begins with Ryuuji and and Taiga
                joining forces to help each other's pursuit of love, albeit due
                to a little incident that happens by mistake. What happens as
                that goes on is the plot. Toradora! does many things really well
                and it's very easy to recommend to anyone with a taste for
                romance flicks with good humour.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">12.GAME</p>
            <p className="article__series-title">Sword Art Online</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgSAO} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> In the year 2022,
                virtual reality has progressed by leaps and bounds, and a
                massive online role-playing game called Sword Art Online (SAO)
                is launched. With the aid of "NerveGear" technology, players can
                control their avatars within the game using nothing but their
                own thoughts. Kazuto Kirigaya, nicknamed "Kirito," is among the
                lucky few enthusiasts who get their hands on the first shipment
                of the game. He logs in to find himself, with ten-thousand
                others, in the scenic and elaborate world of Aincrad, one full
                of fantastic medieval weapons and gruesome monsters. However, in
                a cruel turn of events, the players soon realize they cannot log
                out; the game's creator has trapped them in his new world until
                they complete all one hundred levels of the game. In order to
                escape Aincrad, Kirito will now have to interact and cooperate
                with his fellow players. Some are allies, while others are foes,
                like Asuna Yuuki, who commands the leading group attempting to
                escape from the ruthless game. To make matters worse, Sword Art
                Online is not all fun and games: if they die in Aincrad, they
                die in real life. Kirito must adapt to his new reality, fight
                for his survival, and hopefully break free from his virtual
                hell.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> This one is
                ultra-popular, even among the other popular series on this list.
                Numerous "SAO wannabes" started spawning everywhere after the
                success of this series. The premise is good, the setup is solid.
                Don't expect too much in terms of plot, but that's not what you
                watch SAO for. If you like Role Playing Games, especially the
                ones with "party" mechanics, then you simply can't skip this.
                Even if you do not fall into that specific category, SAO has a
                lot to offer in its Action - Adventure heavy plot. Also, the MC
                is OP (Over Powered) and tries to hide it, but of course
                surprises everyone including the heroine when he is forced to
                show his prowess. Like every other beginner-friendly series on
                the list, highly recommended.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">13.HORROR</p>
            <p className="article__series-title">Another</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgAnother} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> 26 years ago, something
                terrible happened in a middle school fs third year classroom. A
                popular, talented student named Misaki suddenly died, and the
                ramifications of that incident have caused each third year class
                since then to live in fear. It is now 1998, and Kouichi
                Sakakibara has just transferred into the notorious classroom,
                curious about the mysterious secret that his peers are hiding
                from him. He fs drawn to one enigmatic girl named Mei Misaki, a
                quiet student who wears an eye patch and warns him about getting
                involved with her, and continues to seek her out against the
                pleas of his classmates. And that fs when people begin to
                violently die...
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Before I got
                into anime, I used to think "anime horror cannot be good". Of
                course I was pleasantly surprised when I discovered this.
                Another is just ONE of the many GOOD horror anime I've seen. It
                has a quiet start, but incidents start happening rapidly and
                frequently. And it starts getting creepier every episode. Well,
                that much is to be expected of a horror title, but there's also
                a good mystery going on behind all that. And when it is finally
                revealed, I clearly remember thinking "Whoa! I did NOT expect
                THAT!!" May be it's because this was one of those titles I tried
                when I was fairly new to the anime world myself, but I really
                liked Another as a complete horror / mystery package. Go ahead
                and try it.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">14.PSYCHOLOGICAL</p>
            <p className="article__series-title">Death Note</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgDeathnote} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Have you ever felt like
                the world would be a better place if certain people weren ft
                around? Such grim daydreams might occur when watching the dismal
                daily news, but on one fateful day, Light Yagami finds that
                these daydreams can become reality. By pure happenstance, he
                comes across a black notebook entitled "Death Note", whose text
                within states that whoever's name is written on its pages will
                die. With the aid of the death god Ryuk, Light takes it upon
                himself to rid the world of its corruption, ushering in a new
                era of purity one death at a time. But as Ryuk foretells,
                Light's actions will not go unchallenged...
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> I seriously
                doubt there is any need to introduce Death Note of all things,
                because if you know anything about anime, you probably know
                Death Note. In fact, it was Death Note that made me think twice
                before saying "Anime is for kids". Yes, Death Note was the first
                anime I saw when I was "too grown up" for anime, and I cannot
                express in words what I felt throughout and after watching the
                series. It was like I discovered a completely new world. And
                hollywood horror / mystery that I liked before seemed lacking
                after Death Note. The surge of Dopamine from the thrill and
                excitement was like nothing I ever felt. I began frantically
                searching online for "anime like Death Note" and "tv shows like
                Death Note". So yeah, Death Note is a PRETTY BIG DEAL to me. I
                don't want to talk about the plot and spoil this masterpiece.
                Again, it's ONE OF A KIND. A true MASTERPIECE. Do not miss the
                experience that is Death Note.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">15.THRILLER</p>
            <p className="article__series-title">
              Code Geass: Hangyaku no Lelouch (Code Geass: Lelouch of the
              Rebellion)
            </p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgCodegeass} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> In the year 2010, the
                Holy Empire of Britannia is establishing itself as a dominant
                military nation, starting with the conquest of Japan. Renamed to
                Area 11 after its swift defeat, Japan has seen significant
                resistance against these tyrants in an attempt to regain
                independence. Lelouch Lamperouge, a Britannian student,
                unfortunately finds himself caught in a crossfire between the
                Britannian and the Area 11 rebel armed forces. He is able to
                escape, however, thanks to the timely appearance of a mysterious
                girl named C.C., who bestows upon him Geass, the "Power of
                Kings." Realizing the vast potential of his newfound "power of
                absolute obedience," Lelouch embarks upon a perilous journey as
                the masked vigilante known as Zero, leading a merciless
                onslaught against Britannia in order to get revenge once and for
                all.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> This was also
                one of the first few anime I saw. As I have already mentioned, I
                had A LOT of prejudice against anime, you know the steriotypical
                reasons (Anime is for kids / I can't get used to cartoons...). I
                have to say, the art in Code Geass is weird to me even today.
                All the characters have needlessly long legs for some reason.
                But once you get past a couple of episodes, trust me, the story
                and pacing is so ridiculousy good you will forget any complaint
                you have and start thinking only about one thing - the next
                episode. Code Geass has two seasons (the Lelouch story I mean)
                and as good as the first season is, the sequel gets even better.
                And the finale of season 1 is a real cliffhanger. You just can't
                stop wanting more with this one.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">16.MUSIC</p>
            <p className="article__series-title">Nodame Cantabile</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgNodame} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Shinichi Chiaki is a
                first class musician whose dream is to play among the elites in
                Europe. Coming from a distinguished family, he is an infamous
                perfectionist-not only is he highly critical of himself, but of
                others as well. The only thing stopping Shinichi from leaving
                for Europe is his fear of flying. As a result, he's grounded in
                Japan. During his fourth year at Japan's top music university,
                Shinichi happens to meet Megumi Noda or, as she refers to
                herself, Nodame. On the surface, she seems to be an unkempt girl
                with no direction in life. However, when Shinichi hears Nodame
                play the piano for the first time, he is in awe of the kind of
                music she creates. Nevertheless, Shinichi is dismayed to
                discover that Nodame is his neighbor, and worse, she ends up
                falling head over heels in love with him.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Simply for
                the music. You get to experience many famous classical music
                pieces. I know very little about classical music and even I can
                tell it's done really well in this anime. Not only that, there's
                a beautiful romantic comedy between the main characters. And I
                absolutely love the refreshing character that is Nodame. There's
                a lot to entertain you even if you are not in it for the music.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">17.MAGIC</p>
            <p className="article__series-title">Fairy Tail</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgFairytail} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> In the mystical land of
                Fiore, magic exists as an essential part of everyday life.
                Countless magic guilds lie at the core of all magical activity,
                and serve as venues for like-minded mages to band together and
                take on job requests. Among them, Fairy Tail stands out from the
                rest as a place of strength, spirit, and family. Lucy Heartfilia
                is a young mage searching for celestial gate keys, and her dream
                is to become a full-fledged wizard by joining this famous guild.
                In her search, she runs into Natsu Dragneel and his partner
                Happy, who are on a quest to find Natsu's foster father, the
                dragon Igneel. Upon being tricked by a man, Lucy falls under an
                abduction attempt, only to be saved by Natsu. To her shock, he
                reveals that he is a member of Fairy Tail and invites her to
                join them. There, Lucy meets the guild's strange members, such
                as the ice wizard Gray Fullbuster and magic swordswoman Erza
                Scarlet. Together as a family, they battle the forces of evil,
                help those in need, and gain new friends, all the while enjoying
                the never-ending adventure that is Fairy Tail.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Here it is -
                "The power of friendship!!" That summarises the entire show
                which has over 300 episodes, or even more by the time you read
                this. Yes, that feels a little childish. No, the show is not
                really that childish, if you can ignore "The power of
                friendship!!" Okay, jokes aside, Fairy Tail is all about magic
                and guilds. It has a classic formula with colourful art and
                beautiful female cast. The comedy is great. And the world is
                built in a pretty solid manner - there is a lot going on all the
                time. It seems so simple on the outside it's difficult to
                explain how good the story gets at times in the middle of all
                the typical shonen vibes. Also, the dub is really good on this
                one. It's hard to explain why it stands out for me. "Deceptively
                simple" is how I would put it. I thoroughly enjoyed every single
                episode and the characters are all just a blast to watch. This
                is also the only anime on this list I would recommend watching
                in English.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">18.SCHOOL</p>
            <p className="article__series-title">D-Frag</p>
            <div className="article__poster">
              <img className="article__poster--img" src={ImgDFrag} alt="" />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> The Kazama Family-a gang
                of three wannabe delinquents and close friends, spearheaded by
                Kenji Kazama, is trying to make a name for themselves at Fujou
                Academy. On the first day of the term, the gang finds themselves
                putting out a fire in the Game Development Club. Instead of
                thanking them, the eccentric club members attack and knock out
                Kenji's two friends, forcing Kenji to fight for his life.
                Failing to escape, the gang leader is coerced into joining the
                Game Development Club. As he settles in, Kenji gets to know the
                four girls responsible for his provisional membership-student
                council president and general tyrant Chitose Karasuyama,
                spirited tomboy Sakura Mizukami, negligent club advisor Minami
                Oosawa, and the school's infamous shadow leader Roka Shibasaki.
                Throughout the Game Development Club's constant shenanigans and
                his desperate attempts to leave the club, Kenji begins to
                realize that he may be actually enjoying himself.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> It's hard to
                not think about school life when you think about anime. That's
                of course because a very large portion of the consumers happens
                to be teenage boys. So there's really too much to choose from in
                this genre. I chose D-Frag for this particular list because of
                how under-appreciated the show is. It's downright hilarious all
                the way. There's always some kind of unexpectedly hilarious
                situation. You might actually start getting jealous of how fun
                Kazama's school life is. If you just want to be entertained,
                this is pure gold for you. In that sense, the only complaint I
                have with D-Frag is there are ONLY 12 episodes! I want more
                D-Frag!!
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">19.MILITARY</p>
            <p className="article__series-title">
              Nejimaki Seirei Senki: Tenkyou no Alderamin (Alderamin on the Sky)
            </p>
            <div className="article__poster">
              <img
                className="article__poster--img"
                src={ImgNejimakiseireisenki}
                alt=""
              />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Ikta Solork is a
                carefree young man who only wants two things in life: a woman on
                his arm and a place to nap. Unfortunately, his peaceful life is
                destroyed when war breaks out between the Katjvarna Empire and
                the neighboring Republic of Kioka. Ikta and his childhood
                friend, Yatorishino Igsem, join the army as military officers,
                where they meet the infantryman Matthew Tetojirichi, the sniper
                Torway Remion, and the medic Haroma Becker on a boat heading for
                the military exam site. However, after a rogue storm sinks their
                vessel, the five of them end up in enemy territory near a
                military outpost. There, they discover that the heir to the
                Katjvarnan throne, Princess Chamille Kitora Katjvanmaninik, has
                been taken hostage. The five are able to rescue her, and as a
                reward, each one of them is granted the title of Imperial
                Knight-one of the highest honors a soldier can receive. It seems
                that Ikta will have to put his dream of tranquility on hold, as
                he must now become the hero he never wanted to be.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because: </b> Ignoring the
                hard to understand title, Alederamin on the Sky is a true gem I
                happened to find when I didn't have anything to watch. I went in
                with no expectations but the show was a delight to watch. It's
                all about how cool the MC is. You know the type - the lazy
                genius. That's exactly what Ikta Solork is. The way Ikta does
                things always maintains his lazy nature, but the results he
                produces are unexpectedly good. I really wish they'd give us a
                sequel to this one. The 13 episodes aren't enough.
              </p>
            </div>
          </article>

          <article className="article">
            <p className="article__genre">20.MOVIE</p>
            <p className="article__series-title">Kimi no Na wa. (Your Name.)</p>
            <div className="article__poster">
              <img
                className="article__poster--img"
                src={ImgKimiNoNawa}
                alt=""
              />
            </div>
            <div className="article__text">
              <p className="article__text--synopsis">
                <b className="subheading">Synopsis:</b> Mitsuha Miyamizu, a high
                school girl, yearns to live the life of a boy in the bustling
                city of Tokyo-a dream that stands in stark contrast to her
                present life in the countryside. Meanwhile in the city, Taki
                Tachibana lives a busy life as a high school student while
                juggling his part-time job and hopes for a future in
                architecture. One day, Mitsuha awakens in a room that is not her
                own and suddenly finds herself living the dream life in
                Tokyo-but in Taki's body! Elsewhere, Taki finds himself living
                Mitsuha's life in the humble countryside. In pursuit of an
                answer to this strange phenomenon, they begin to search for one
                another. Kimi no Na wa. revolves around Mitsuha and Taki's
                actions, which begin to have a dramatic impact on each other's
                lives, weaving them into a fabric held together by fate and
                circumstance.
              </p>
              <p className="article__text--review">
                <b className="subheading">Recommended because:</b> Although
                "Movie" is not exactly a genre, I wanted to put this one on the
                list so I'm calling it a genre for now. Kimi no Na wa is truly
                an experience. Words are just not enough, you have to experience
                it. Just about everything is exceptional here. The story.
                Characters. Art. Colours. And do not forget, the MUSIC. I
                discovered RADWIMPS through this anime and I am a fan since.
                I'll say it again, this movie is an EXPERIENCE. If you don't
                want to be committed to a series of over 12 episodes, just watch
                Kimi no Na wa.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
