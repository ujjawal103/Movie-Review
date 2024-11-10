const express = require('express')
const multer  = require('multer')

const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');


const app = express()
let port = 8080;
const path = require("path");
const { count } = require('console');

const storage = multer.diskStorage({
    destination: './public/images/uploads', // Folder where images will be saved
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });
app.use(express.urlencoded({ extended: true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'));
let incorrectPass = 0;
let { password } = {password : "empty"};
let currUser ="";                      // they ensure that on switchin in login time from one user to another user then the "Incorrect password" will not be shown (if previous one password was incorrect)
let previousUser="";
let users = [
    {
        name : "Vikas Tiwari",
        pass : 7607674205,
    },
    {
        name : "Satyam Raj",
        pass : 9119869107,
    },
    {
        name : "Satyam Sharma",
        pass : 9621965441,
    },
    {
        name : "Shailendra Singh",
        pass : 8052200225,
    },
    {
        name : "Ujjawal Jaiswal",
        pass : 7800466039,
    },
    {
        name : "Dheeraj Singh",
        pass : 7800337275,
    },
];

let Satyam_Raj = [
    {
        id:"101",
        username: 'Satyam Raj',
        movie: 'Chhichhore',
        review: '*Chhichhore* is a heartwarming and inspiring film that beautifully portrays the importance of friendship, resilience, and the pressure of academic life. The story, which shifts between college days and adulthood, is filled with humor, emotion, and relatable moments. The performances by the ensemble cast, especially Sushant Singh Rajput, are touching and memorable. With its strong message about failure and success, *Chhichhore* is a must-watch for anyone who appreciates stories about life and relationships!',
        imagePath: '/images/uploads\\1730662531299.webp',
        rating: '4'
      },
      {
        id:"102",
        username: 'Satyam Raj',
        movie: 'Genius',
        review: "*Genius* is an engaging Bollywood thriller that combines action, drama, and romance. The story revolves around a young genius who uses his intelligence to fight against corruption and injustice. The performances are strong, especially the lead, who captures the character's depth and determination. With its exciting plot twists and emotional moments, *Genius* keeps you entertained throughout. It's a captivating film for anyone who enjoys smart storytelling and action!",
        imagePath: '/images/uploads\\1730662463799.jpeg',
        rating: '5'
      }
];
let Satyam_Sharma = [
    {
        id:"103",
        username: 'Satyam Sharma',
        movie: 'Singham Again',
        review: "*Singham Again* doesn't live up to the previous movies. The story is predictable, and the dialogues are boring. Even with a good cast, it feels repetitive and slow, making it a dull watch for fans of action films.",
        imagePath: '/images/uploads\\1730662908787.jpg',
        rating: '1'
      },
      {
        id:"104",
        username: 'Satyam Sharma',
        movie: 'Jawan',
        review: "Jawan is a thrilling action-packed film that combines high-stakes drama with a gripping storyline. Shah Rukh Khan delivers a powerful dual performance, showcasing his versatility and charisma. The film features breathtaking action sequences, impressive visuals, and a strong social message that resonates with audiences. With a talented supporting cast and a well-crafted plot, *Jawan* keeps you engaged from start to finish. It's a must-watch for fans of thrilling cinema and those who appreciate a good blend of action and emotion!",
        imagePath: '/images/uploads\\1730662804344.jpeg',
        rating: '4'
      }
];
let Vikas_Tiwari = [
    {
        id:"105",
        username: 'Vikas Tiwari',
        movie: 'HACKED',
        review: "*Hacked* is a gripping psychological thriller that delves into the dark side of obsession and technology. The story follows a young hacker who becomes dangerously infatuated with a girl, leading to intense and chilling consequences. The performances are strong, particularly by the lead, who effectively portrays the character's descent into madness. With its intriguing plot twists and a suspenseful atmosphere, *Hacked* keeps viewers engaged and on edge. It's a compelling film for those who enjoy tense, thought-provoking thrillers!",
        imagePath: '/images/uploads\\1730662704678.jpeg',
        rating: '4'
      },
      {
        id:"106",
        username: 'Vikas Tiwari',
        movie: 'WAR',
        review: '*WAR* is an exhilarating action thriller that keeps you on the edge of your seat with its stunning visuals and high-octane sequences. Featuring Hrithik Roshan and Tiger Shroff in lead roles, the film showcases a gripping cat-and-mouse game between two skilled agents. The chemistry between the leads is electric, and their jaw-dropping action scenes are a highlight. With a captivating storyline, stylish direction, and a powerful soundtrack, *WAR* is a must-watch for fans of action-packed cinema!',
        imagePath: '/images/uploads\\1730662654282.jpeg',
        rating: '3'
      }
];
let Shailendra_Singh = [
    {
        id:"107",
        username: 'Shailendra Singh',
        movie: 'Kalki 2898 AD',
        review: '*Kalki 2898 AD* is a visionary sci-fi movie set in a futuristic world with stunning visuals and intense storytelling. With Prabhas in the lead, the film combines mythology and science fiction, creating a unique cinematic experience. Its impressive visuals, gripping plot, and deep themes make it an exciting watch for fans of futuristic action dramas.',
        imagePath: '/images/uploads\\1730662086396.webp',
        rating: '4'
      },
      {
        id:"108",
        username: 'Shailendra Singh',
        movie: 'KGF',
        review: '*KGF* is an epic action drama that captivates with its intense storyline, powerful performances, and gritty visuals. Following Rocky’s journey from poverty to power, the film is packed with thrilling moments and strong emotions. Yash’s dynamic performance as Rocky elevates the story, making each scene memorable. With its raw energy, dramatic soundtrack, and grand cinematography, *KGF* is a must-watch for action lovers and fans of impactful storytelling.',
        imagePath: '/images/uploads\\1730662034949.jpeg',
        rating: '4'
      },
      {
        id:"109",
        username: 'Shailendra Singh',
        movie: 'Salaar',
        review: '*Salaar* is a thrilling South Indian action movie with powerful visuals and intense fight scenes. Prabhas shines in a strong role, bringing depth to his character. It’s a gripping, high-energy film that action fans will love!',
        imagePath: '/images/uploads\\1730662007538.jpeg',
        rating: '5'
      }
];
let Ujjawal_Jaiswal = [
    {
        id:"110",
        username: 'Ujjawal Jaiswal',
        movie: 'My Girlfriend is an Alien',
        review: '*My Girlfriend is an Alien* is an irresistibly fun and quirky series, blending romance, comedy, and a touch of sci-fi. The story of an alien girl adjusting to life on Earth—and falling for a human—brings tons of laughs and heartwarming moments. The chemistry between the leads is electric, making every interaction feel vibrant and unforgettable. It’s the perfect blend of fantasy and romance, ideal for anyone looking for a lighthearted, unique love story.',
        imagePath: '/images/uploads\\1730661959049.webp',
        rating: '5'
      },
      {
        id:"111",
        username: 'Ujjawal Jaiswal',
        movie: 'Put Your Head on My Shoulder',
        review: '*Put Your Head on My Shoulder* is a heartwarming, feel-good C-drama that beautifully captures young love and self-discovery. The chemistry between Si Tu Mo and Gu Wei Yi is charming and relatable, making each episode a joy to watch. It’s a sweet, lighthearted story that’s perfect for anyone wanting an easygoing, delightful romance—an ideal first C-drama experience!',
        imagePath: '/images/uploads\\1730661918715.jpeg',
        rating: '3'
      }
];
let Dheeraj_Singh = [
    {
        id:"112",
        username: 'Dheeraj Singh',
        movie: 'pathan',
        review: '*Pathaan* is an action-packed Bollywood thriller that delivers nonstop excitement with high-octane stunts and a gripping storyline. Shah Rukh Khan shines in the role, bringing charisma and intensity as a fearless spy on a mission. The film’s impressive visuals, thrilling sequences, and powerful performances make it a must-watch. With twists, adrenaline, and star power, *Pathaan* is a perfect pick for action lovers!',
        imagePath: '/images/uploads\\1730662262972.jpeg',
        rating: '3'
      },
      {
        id:"113",
        username: 'Dheeraj Singh',
        movie: 'Pushpa',
        review: '*Pushpa* is a gritty action-drama that captures the journey of a fearless, rebellious man rising in the red sandalwood smuggling world. Allu Arjun’s electrifying performance as Pushpa, with his unique style and intensity, brings a raw, magnetic energy to the film. The powerful dialogues, catchy soundtrack, and action-packed scenes make it a thrilling watch. *Pushpa* is a must-see for fans of action and character-driven storytelling!',        
        imagePath: '/images/uploads\\1730662203057.jpeg',
        rating: '4'
      }
];
let allPosts = [
    {
        id:"101",
        username: 'Satyam Raj',
        movie: 'Chhichhore',
        review: '*Chhichhore* is a heartwarming and inspiring film that beautifully portrays the importance of friendship, resilience, and the pressure of academic life. The story, which shifts between college days and adulthood, is filled with humor, emotion, and relatable moments. The performances by the ensemble cast, especially Sushant Singh Rajput, are touching and memorable. With its strong message about failure and success, *Chhichhore* is a must-watch for anyone who appreciates stories about life and relationships!',
        imagePath: '/images/uploads\\1730662531299.webp',
        rating: '4'
      },
      {
        id:"113",
        username: 'Dheeraj Singh',
        movie: 'Pushpa',
        review: '*Pushpa* is a gritty action-drama that captures the journey of a fearless, rebellious man rising in the red sandalwood smuggling world. Allu Arjun’s electrifying performance as Pushpa, with his unique style and intensity, brings a raw, magnetic energy to the film. The powerful dialogues, catchy soundtrack, and action-packed scenes make it a thrilling watch. *Pushpa* is a must-see for fans of action and character-driven storytelling!',        
        imagePath: '/images/uploads\\1730662203057.jpeg',
        rating: '4'
      },
      {
        id:"103",
        username: 'Satyam Sharma',
        movie: 'Singham Again',
        review: "*Singham Again* doesn't live up to the previous movies. The story is predictable, and the dialogues are boring. Even with a good cast, it feels repetitive and slow, making it a dull watch for fans of action films.",
        imagePath: '/images/uploads\\1730662908787.jpg',
        rating: '1'
      },
      {
        id:"105",
        username: 'Vikas Tiwari',
        movie: 'HACKED',
        review: "*Hacked* is a gripping psychological thriller that delves into the dark side of obsession and technology. The story follows a young hacker who becomes dangerously infatuated with a girl, leading to intense and chilling consequences. The performances are strong, particularly by the lead, who effectively portrays the character's descent into madness. With its intriguing plot twists and a suspenseful atmosphere, *Hacked* keeps viewers engaged and on edge. It's a compelling film for those who enjoy tense, thought-provoking thrillers!",
        imagePath: '/images/uploads\\1730662704678.jpeg',
        rating: '4'
      },
      {
        id:"112",
        username: 'Dheeraj Singh',
        movie: 'pathan',
        review: '*Pathaan* is an action-packed Bollywood thriller that delivers nonstop excitement with high-octane stunts and a gripping storyline. Shah Rukh Khan shines in the role, bringing charisma and intensity as a fearless spy on a mission. The film’s impressive visuals, thrilling sequences, and powerful performances make it a must-watch. With twists, adrenaline, and star power, *Pathaan* is a perfect pick for action lovers!',
        imagePath: '/images/uploads\\1730662262972.jpeg',
        rating: '3'
      },
      {
        id:"108",
        username: 'Shailendra Singh',
        movie: 'KGF',
        review: '*KGF* is an epic action drama that captivates with its intense storyline, powerful performances, and gritty visuals. Following Rocky’s journey from poverty to power, the film is packed with thrilling moments and strong emotions. Yash’s dynamic performance as Rocky elevates the story, making each scene memorable. With its raw energy, dramatic soundtrack, and grand cinematography, *KGF* is a must-watch for action lovers and fans of impactful storytelling.',
        imagePath: '/images/uploads\\1730662034949.jpeg',
        rating: '4'
      },
      {
        id:"110",
        username: 'Ujjawal Jaiswal',
        movie: 'My Girlfriend is an Alien',
        review: '*My Girlfriend is an Alien* is an irresistibly fun and quirky series, blending romance, comedy, and a touch of sci-fi. The story of an alien girl adjusting to life on Earth—and falling for a human—brings tons of laughs and heartwarming moments. The chemistry between the leads is electric, making every interaction feel vibrant and unforgettable. It’s the perfect blend of fantasy and romance, ideal for anyone looking for a lighthearted, unique love story.',
        imagePath: '/images/uploads\\1730661959049.webp',
        rating: '5'
      },
      {
        id:"106",
        username: 'Vikas Tiwari',
        movie: 'WAR',
        review: '*WAR* is an exhilarating action thriller that keeps you on the edge of your seat with its stunning visuals and high-octane sequences. Featuring Hrithik Roshan and Tiger Shroff in lead roles, the film showcases a gripping cat-and-mouse game between two skilled agents. The chemistry between the leads is electric, and their jaw-dropping action scenes are a highlight. With a captivating storyline, stylish direction, and a powerful soundtrack, *WAR* is a must-watch for fans of action-packed cinema!',
        imagePath: '/images/uploads\\1730662654282.jpeg',
        rating: '3'
      },
      {
        id:"107",
        username: 'Shailendra Singh',
        movie: 'Kalki 2898 AD',
        review: '*Kalki 2898 AD* is a visionary sci-fi movie set in a futuristic world with stunning visuals and intense storytelling. With Prabhas in the lead, the film combines mythology and science fiction, creating a unique cinematic experience. Its impressive visuals, gripping plot, and deep themes make it an exciting watch for fans of futuristic action dramas.',
        imagePath: '/images/uploads\\1730662086396.webp',
        rating: '4'
      },
      {
        id:"104",
        username: 'Satyam Sharma',
        movie: 'Jawan',
        review: "Jawan is a thrilling action-packed film that combines high-stakes drama with a gripping storyline. Shah Rukh Khan delivers a powerful dual performance, showcasing his versatility and charisma. The film features breathtaking action sequences, impressive visuals, and a strong social message that resonates with audiences. With a talented supporting cast and a well-crafted plot, *Jawan* keeps you engaged from start to finish. It's a must-watch for fans of thrilling cinema and those who appreciate a good blend of action and emotion!",
        imagePath: '/images/uploads\\1730662804344.jpeg',
        rating: '4'
      },
      {
        id:"109",
        username: 'Shailendra Singh',
        movie: 'Salaar',
        review: '*Salaar* is a thrilling South Indian action movie with powerful visuals and intense fight scenes. Prabhas shines in a strong role, bringing depth to his character. It’s a gripping, high-energy film that action fans will love!',
        imagePath: '/images/uploads\\1730662007538.jpeg',
        rating: '5'
      },
      {
        id:"111",
        username: 'Ujjawal Jaiswal',
        movie: 'Put Your Head on My Shoulder',
        review: '*Put Your Head on My Shoulder* is a heartwarming, feel-good C-drama that beautifully captures young love and self-discovery. The chemistry between Si Tu Mo and Gu Wei Yi is charming and relatable, making each episode a joy to watch. It’s a sweet, lighthearted story that’s perfect for anyone wanting an easygoing, delightful romance—an ideal first C-drama experience!',
        imagePath: '/images/uploads\\1730661918715.jpeg',
        rating: '3'
      },
      {
        id:"102",
        username: 'Satyam Raj',
        movie: 'Genius',
        review: "*Genius* is an engaging Bollywood thriller that combines action, drama, and romance. The story revolves around a young genius who uses his intelligence to fight against corruption and injustice. The performances are strong, especially the lead, who captures the character's depth and determination. With its exciting plot twists and emotional moments, *Genius* keeps you entertained throughout. It's a captivating film for anyone who enjoys smart storytelling and action!",
        imagePath: '/images/uploads\\1730662463799.jpeg',
        rating: '5'
      }  
];

app.get("/",function(req,res){
    res.render("allPosts.ejs",{ allPosts })
})
app.get("/users",function(req,res){
    res.render("users.ejs" ,{ users });
    password.password = "empty";
})

app.get("/users/:username",function(req,res){
    let { username } = req.params;
    currUser = username;
    if(previousUser == currUser){
        incorrectPass=1;
    }
    else if((previousUser != currUser)&&(previousUser != "" && currUser !="")){
        incorrectPass=0;
    }  
    let {name , pass} = users.find((ele) => ele.name === username);
    res.render("enterPass.ejs",{ name , pass , incorrectPass});

})


app.get("/users/:username/profile",function(req,res){
    let { username } = req.params;
    let {name , pass} = users.find((ele) => ele.name === username);
    let arrayname = name.replace(" ","_");

    if(pass === parseInt(password.password)){
        incorrectPass=0;
        if(arrayname === "Shailendra_Singh"){
            let posts = Shailendra_Singh;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Satyam_Raj"){
            let posts = Satyam_Raj;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Satyam_Sharma"){
            let posts = Satyam_Sharma;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Ujjawal_Jaiswal"){
            let posts = Ujjawal_Jaiswal;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Vikas_Tiwari"){
            let posts = Vikas_Tiwari;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
        else if(arrayname === "Dheeraj_Singh"){
            let posts = Dheeraj_Singh;
            res.render("userProfile.ejs",{ posts , pass ,name});
        }
    }
    else if(pass !== parseInt(password.password) || password.password == "empty"){
        incorrectPass=2;
        res.redirect(`/users/${name}/`);
    }

    
})



app.post("/users/:username/profile", function(req,res){
    let { username } = req.params;
    password  = req.body;                               //making global for direct get request
    let {name , pass} = users.find((ele) => ele.name === username);
    // let arrayname = name.replace(" ","_");
    previousUser = username;

    if(pass === parseInt(password.password)){
        incorrectPass=0;
        res.redirect(`/users/${name}/profile`)
    }
    else{
        incorrectPass=1;
        res.redirect(`/users/${name}/`);
    }
    
})


app.get("/users/:username/new" , function(req,res){
    let { username } = req.params;
    let {name , pass} = users.find((ele) => ele.name === username);
    res.render("newMovie.ejs", { name })
})
app.post("/users/:username/new",upload.single('image'), function(req,res){
    let { username } = req.params;
    let { movie, review, rating } = req.body;
    let  id  = uuidv4();
    let arrayname = username.replace(" ","_");
    let imagePath = req.file ? req.file.path : null;
    if(imagePath != null){
        imagePath = imagePath.replace("public\\","/");
        imagePath = imagePath.replace("\\","/");
    }
    

    if(arrayname === "Shailendra_Singh"){
        Shailendra_Singh.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Satyam_Raj"){
        Satyam_Raj.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Satyam_Sharma"){
        Satyam_Sharma.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Ujjawal_Jaiswal"){
        Ujjawal_Jaiswal.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Vikas_Tiwari"){
        Vikas_Tiwari.unshift({id, username ,movie , review , imagePath , rating});
    }
    else if(arrayname === "Dheeraj_Singh"){
        Dheeraj_Singh.unshift({id, username ,movie , review , imagePath , rating});
    }
    
    allPosts.unshift({id, username ,movie , review , imagePath , rating});
    // console.log(allPosts);
    res.redirect(`/users/${username}/profile`);
})



app.patch("/users/:username/:id/edit",function(req,res){
  let {username, id } = req.params;
  let arrayname = username.replace(" ","_");
   let post;
   let fromAllPost;
  if(arrayname === "Shailendra_Singh"){
   post = Shailendra_Singh.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Raj"){
   post = Satyam_Raj.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Sharma"){
   post = Satyam_Sharma.find((ele)=>ele.id === id);
}
else if(arrayname === "Ujjawal_Jaiswal"){
   post = Ujjawal_Jaiswal.find((ele)=>ele.id === id);
}
else if(arrayname === "Vikas_Tiwari"){
   post = Vikas_Tiwari.find((ele)=>ele.id === id);
}
else if(arrayname === "Dheeraj_Singh"){
   post = Dheeraj_Singh.find((ele)=>ele.id === id);
}


res.render("editMovie.ejs",{ post });
})


app.post("/users/:username/:id/edit",upload.single('image'),function(req,res){
  let {username, id } = req.params;
  let { movie, review, rating } = req.body;
  let imagePath = req.file ? req.file.path : null;
  if(imagePath != null){
      imagePath = imagePath.replace("public\\","/");
      imagePath = imagePath.replace("\\","/");
  }

  let arrayname = username.replace(" ","_");
   let post;
   let fromAllPost;
  if(arrayname === "Shailendra_Singh"){
   post = Shailendra_Singh.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Raj"){
   post = Satyam_Raj.find((ele)=>ele.id === id);
}
else if(arrayname === "Satyam_Sharma"){
   post = Satyam_Sharma.find((ele)=>ele.id === id);
}
else if(arrayname === "Ujjawal_Jaiswal"){
   post = Ujjawal_Jaiswal.find((ele)=>ele.id === id);
}
else if(arrayname === "Vikas_Tiwari"){
   post = Vikas_Tiwari.find((ele)=>ele.id === id);
}
else if(arrayname === "Dheeraj_Singh"){
   post = Dheeraj_Singh.find((ele)=>ele.id === id);
}

fromAllPost = allPosts.find((ele)=>ele.id === id);

post.movie = movie;
post.review = review;
post.rating = rating;
if(imagePath !== null){
  post.imagePath = imagePath;
}


fromAllPost.movie = movie;
fromAllPost.review = review;
fromAllPost.rating = rating;
if(imagePath !== null){
  fromAllPost.imagePath = imagePath;
}

// console.log(movie , review ,rating , imagePath);

// console.log(post , fromAllPost);

res.redirect(`/users/${username}/profile`);
})






app.delete("/users/:username/:id",function(req,res){
  let {username, id } = req.params;
  let arrayname = username.replace(" ","_");
  if(arrayname === "Shailendra_Singh"){
    Shailendra_Singh = Shailendra_Singh.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Satyam_Raj"){
    Satyam_Raj = Satyam_Raj.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Satyam_Sharma"){
    Satyam_Sharma = Satyam_Sharma.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Ujjawal_Jaiswal"){
    Ujjawal_Jaiswal = Ujjawal_Jaiswal.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Vikas_Tiwari"){
    Vikas_Tiwari = Vikas_Tiwari.filter((ele)=>ele.id !== id);
 }
 else if(arrayname === "Dheeraj_Singh"){
    Dheeraj_Singh = Dheeraj_Singh.filter((ele)=>ele.id !== id);
 }
 
 allPosts = allPosts.filter((ele)=>ele.id !== id);

 res.redirect(`/users/${username}/profile`);
})





app.listen(port , function(req , res){
    console.log("listen on port : 8080");
})