// import { response } from "express";

// console.log("Index js here");

$(document).ready(function () {

  // poster_path, id, title, vote_average, overview
  let hardcodeMovies = [
    {
      "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
      "id": 278,
      "title": "The Shawshank Redemption",
      "vote_average": 8.7,
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    },
    {
      "poster_path": "/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
      "id": 238,
      "title": "The Godfather",
      "vote_average": 8.7,
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    },
    {
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "id": 496243,
      "title": "Parasite",
      "vote_average": 8.6,
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    },
    {
      "poster_path": "/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
      "id": 240,
      "title": "The Godfather: Part II",
      "vote_average": 8.5,
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    },
    {
      "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
      "id": 372058,
      "title": "Your Name.",
      "vote_average": 8.5,
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    },
    {
      "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
      "id": 129,
      "title": "Spirited Away",
      "vote_average": 8.5,
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    },
    {
      "poster_path": "/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
      "id": 497,
      "title": "The Green Mile",
      "vote_average": 8.5,
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    },
    {
      "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "id": 680,
      "title": "Pulp Fiction",
      "vote_average": 8.5,
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    },
    {
      "poster_path": "/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
      "id": 155,
      "title": "The Dark Knight",
      "vote_average": 8.4,
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    },
    {
      "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
      "id": 13,
      "title": "Forrest Gump",
      "vote_average": 8.4,
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    },
    {
      "poster_path": "/v6xrz4fr92KY1oNC3HsEvrsvR1n.jpg",
      "id": 346,
      "title": "Seven Samurai",
      "vote_average": 8.4,
      "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
    },
    {
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "id": 122,
      "title": "The Lord of the Rings: The Return of the King",
      "vote_average": 8.4,
      "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    },
    {
      "poster_path": "/x733R4ISI0RbKeHhVkXdTMFmTFr.jpg",
      "id": 311,
      "title": "Once Upon a Time in America",
      "vote_average": 8.4,
      "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    },
    {
      "id": 429,
      "vote_average": 8.4,
      "title": "The Good, the Bad and the Ugly",
      "overview": "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      "poster_path": "/wfPHdfofBD5PN96dV96a51B3Ja2.jpg"
    },
    {
      "poster_path": "/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
      "id": 389,
      "title": "12 Angry Men",
      "vote_average": 8.4,
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    },
    {
      "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
      "id": 539,
      "title": "Psycho",
      "vote_average": 8.4,
      "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
    }
  ];

  // poster_path, id, name, vote_average, overview
  let hardcodeTV = [
    {
      "name": "The Simpsons",
      "id": 456,
      "vote_average": 7.2,
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "poster_path": "/qcr9bBY6MVeLzriKCmJOv1562uY.jpg"
    },
    {
      "name": "Star Wars: The Clone Wars",
      "id": 4194,
      "vote_average": 7.8,
      "overview": "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
      "poster_path": "/p6s2svEHHLsQ1TOw4Si54c1dD5L.jpg"
    },
    {
      "name": "The Flash",
      "id": 60735,
      "vote_average": 6.8,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    },
    {
      "name": "The Walking Dead",
      "id": 1402,
      "vote_average": 7.3,
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "poster_path": "/5l10EjdgPxu8Gbl5Ww6SWkVQH6T.jpg"
    },
    {
      "name": "Law & Order: Special Victims Unit",
      "id": 2734,
      "vote_average": 6.6,
      "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
      "poster_path": "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
    },
    {
      "name": "Better Call Saul",
      "id": 60059,
      "vote_average": 8.1,
      "overview": "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in “criminal lawyer\".",
      "poster_path": "/cU0kAjGjA6d2XjBzJMUIEVKiGDb.jpg"
    },
    {
      "name": "Doctor Who",
      "id": 57243,
      "vote_average": 7,
      "overview": "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
      "poster_path": "/cDDb7WA2i7cENhkEEjXEDrXGyNL.jpg"
    },
    {
      "name": "Grey's Anatomy",
      "id": 1416,
      "vote_average": 6.6,
      "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
      "poster_path": "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
    },
    {
      "name": "Outlander",
      "id": 56570,
      "vote_average": 7.4,
      "overview": "The story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.",
      "poster_path": "/70PRIpG1phOyphejeLwi0K8zdJo.jpg"
    },
    {
      "name": "Star Trek: Picard",
      "id": 85949,
      "vote_average": 7.6,
      "overview": "Set twenty years after the events of Star Trek Nemesis, we follow the now-retired Admiral Picard into the next chapter of his life.",
      "poster_path": "/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg"
    },
    {
      "name": "Riverdale",
      "id": 69050,
      "vote_average": 7.5,
      "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
      "poster_path": "/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg"
    },
    {
      "name": "Hawaii Five-0",
      "id": 32798,
      "vote_average": 6.8,
      "overview": "Steve McGarrett returns home to Oahu, in order to find his father's killer. The governor offers him the chance to run his own task force (Five-0). Steve's team is joined by Chin Ho Kelly, Danny \"Danno\" Williams, and Kono Kalakaua.",
      "poster_path": "/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg"
    },
    {
      "name": "Homeland",
      "id": 1407,
      "vote_average": 7.4,
      "overview": "CIA officer Carrie Mathison is tops in her field despite being bipolar, which makes her volatile and unpredictable. With the help of her long-time mentor Saul Berenson, Carrie fearlessly risks everything, including her personal well-being and even sanity, at every turn.",
      "poster_path": "/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg"
    },
    {
      "name": "Brooklyn Nine-Nine",
      "id": 48891,
      "vote_average": 7.8,
      "overview": "A single-camera ensemble comedy following the lives of an eclectic group of detectives in a New York precinct, including one slacker who is forced to shape up when he gets a new boss.",
      "poster_path": "/dzj0oLZWe3qMgK4jlgdKWPVxxIx.jpg"
    },
    {
      "name": "The Outsider",
      "id": 84661,
      "vote_average": 8.4,
      "overview": "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
      "poster_path": "/aMiPwPQjQI1EZN3xP2V0sSU37dc.jpg"
    },
    {
      "name": "Chicago Fire",
      "id": 44006,
      "vote_average": 7.6,
      "overview": "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
      "poster_path": "/g9aoiYLbE3IrDiMms5fU4lv6BR4.jpg"
    },
    {
      "name": "Pokémon",
      "id": 60572,
      "vote_average": 6.7,
      "overview": "Join Ash Ketchum, accompanied by his partner Pikachu, as he travels through many regions, meets new friends and faces new challenges on his quest to become a Pokémon Master.",
      "poster_path": "/2pcTUs20ysCdA6DZclaPmGXD6ph.jpg"
    },
    {
      "name": "Strike Back",
      "id": 32573,
      "vote_average": 7.4,
      "overview": "The series follows John Porter, a former British Special Forces soldier, who is drafted back into service by Section 20, a fictional branch of the Secret Intelligence Service.",
      "poster_path": "/1SLMVuZP3gjcsa4wKELg2JXSMy2.jpg"
    },
    {
      "name": "DC's Legends of Tomorrow",
      "id": 62643,
      "vote_average": 6.5,
      "overview": "When heroes alone are not enough ... the world needs legends. Having seen the future, one he will desperately try to prevent from happening, time-traveling rogue Rip Hunter is tasked with assembling a disparate group of both heroes and villains to confront an unstoppable threat — one in which not only is the planet at stake, but all of time itself. Can this ragtag team defeat an immortal threat unlike anything they have ever known?",
      "poster_path": "/yJ3xE11IDIe29LJsSbhzwt5Oxtd.jpg"
    },
    {
      "name": "The Voice",
      "id": 37678,
      "vote_average": 5.3,
      "overview": "The strongest vocalists from across the United states compete in a blockbusters vocal competition, the winner becomes “The Voice.” The show's innovative format features four stages of competition: the blind auditions, the battle rounds, the knockouts and, finally, the live performance shows.",
      "poster_path": "/5bAzxOZRliSNyuGj3xdVgBLaPup.jpg"
    }

  ]


  const popularMovies = () => {

    for (var i = 0; i < hardcodeMovies.length; i++) {

      var newDiv = $("<div>");
      newDiv.addClass("item");

      var bkgImg = hardcodeMovies[i].poster_path;

      var img = $("<img>");
      var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;

      img.attr("src", imgSrc);
      img.addClass("carouselImage");
      img.attr("data-movie", hardcodeMovies[i].title);
      img.attr("data-id", hardcodeMovies[i].id);

      // not sure if we need the below as we'll be doing an 
      // axios call based on title once we move to selected
      // img.attr("data-vote", hardcodeMovies[i].vote_average);
      // img.attr("data-summary", hardcodeMovies[i].overview);
      // img.attr("data-poster", hardcodeMovies[i].poster_path);
      newDiv.append(img);

      $("#popMovies").append(newDiv);
    };
  };

  const popularTv = () => {
    //div with class, image with info, append image to div, append div to parent
    for (var i = 0; i < hardcodeTV.length; i++) {

      var newDiv = $("<div>");
      newDiv.addClass("item");

      var bkgImg = hardcodeTV[i].poster_path;


      var img = $("<img>");
      var imgSrc = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + bkgImg;


      img.attr("src", imgSrc);
      img.addClass("carouselImage");
      img.attr("data-tv", hardcodeTV[i].name);
      img.attr("data-id", hardcodeTV[i].id);
      // img.attr("data-vote", hardcodeTV[i].vote_average);
      // img.attr("data-summary", hardcodeTV[i].overview);
      // img.attr("data-poster", hardcodeTV[i].poster_path);
      newDiv.append(img);

      $(newDiv).appendTo($("#popTv"));
    };
  };

  const generateOwl = () => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
      }
    });

  };


  popularMovies();
  popularTv();
  generateOwl();

  //on click for heading over to selected page
  $(".carouselImage").on("click", function (event) {
    event.preventDefault();
    //   console.log("this", this)
    //   let movie = $(this).data("movie");
    //   console.log("this movie ", movie);
    //   console.log("this tv ", $(this).data("tv"));


    let id = $(this).data("id");


    let type = $(this).data("movie") === undefined ? "tv" : "movie";
    // to be injected to the api address later

    moveToSelected(type, id);
  });

  const moveToSelected = (type, id) => {
    console.log("do we make it to moveToSelected?")
    //we make it this far and then we bork
    $.post("/api/selected/", {
      type: type,
      id: id
    }).then(function (data) {
      console.log("did this work", data);
      // data is not getting passed over here correctly,
      // no way to save the data, not sure what to do
      // localStorage.setItem("dataSet", JSON.stringify(data));
      window.location = ("/selected");
    }).catch(function (err) {
      console.log(err);
    });
  };

  // click event for search functionality
  $(".searchform").on("submit", function(event) {
    event.preventDefault();


    var search = $("#search").val().trim();
    search = search.replace(/\s+/g, "").toLowerCase();
    if(search) {
      console.log(search);
      location.assign("/selected");
      console.log("/api/" + search);
    } else {
      var mblSearch = $("#search2").val().trim();
      mblSearch = mblSearch.replace(/\s+/g, "").toLowerCase();
      console.log(mblSearch);
      location.assign("/selected");
      console.log("/api/" + mblSearch)
    }
  });
});