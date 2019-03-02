var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// DBSetting 
// var mysql = require('mysql');
// var conn = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: 'wo213462000',
//     database: 'First'
//   });

// conn.connect();

// app Setting 

var app = express();

app.locals.pretty = true ;
app.set('views', '../beta_senior_project_view');
app.set('view engine', 'jade');

// image 폴더 절대경로 지정  
app.use(express.static('../beta_senior_project_image'));

// post 방식 처리 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/main', function(req,res)
{
    res.render('main_view');
});

// main 
app.get('/First', function(req,res)
{
    res.render('First');
});

//  Tag , True or false 

// Single
var First_Tag 
var First_TF
// Multi 
var Multi_value
var Multi_TF

// CategoryCoop
var CategoryCoop_value
var CategoryCoop_TF

//  Horror Vs Story-Rich & Relaxing 

var Horror_value
var Horror_TF
var Relaxing_value
var Relaxing_TF
var Story_Rich_value
var Story_Rich_TF

// CategoryMMO 
var CategoryMMO_value
var CategoryMMO_TF

// Free VS pay 
var IsFree_value 
var IsFree_TF
var GenreIsFreeToPlay_value
var GenreIsFreeToPlay_TF
var PurchaseAvail_value
var PurchaseAvail_TF

// Causal VS Dark 
var Causal_value
var Causal_TF 


// Cute , Music , Humor , Comedy VS none

var Cute_value
var Cute_TF
var Music_value
var Music_TF
var Humor_value
var Humor_TF
var Comedy_value
var Comedy_TF 


// Gore Vs Survive 

var Gore_value
var Gore_TF
var Survive_value
var Survive_TF


// Stratgy 

var Stratgy_value
var Stratgy_TF



// Sci_fi VS Fantasy 

var Sci_fi_value
var Sci_fi_TF
var Fantasy_value
var Fantasy_TF

// Action

var Action_value
var Action_TF

// Violent 

var Violent_value
var Violent_TF

// Sports VS Racing 

var sports_value
var sports_TF
var Racing_value
var Racing_TF


// Farm Vs Simulation Vs Building 

var Farm_value
var Farm_TF
var Simulation_value
var Simulation_TF
var Build_value
var Build_TF

// Puzzle 

var Puzzle_value
var Puzzle_TF

// Shooter 

var Shooter_value
var Shooter_TF

// Dark 

var Dark_value
var Dark_TF

// Root node -Y
app.get('/CategorySinglePlayer', function(req,res)
{
    res.render('CategorySinglePlayer');
});

app.post('/CategorySinglePlayer' , function(req,res)
{
  First_Tag  = req.body.Single_value;
  First_TF = req.body.Single_TF;
  res.render('CategorySinglePlayer')
});

// Root node -N
app.get('/CategoryMultiplayer', function(req,res)
{
    res.render('CategoryMultiplayer');
});

app.post('/CategoryMultiplayer', function(req,res)
{
  Multi_value = req.body.Multi_value;
  Multi_TF = req.body.Multi_TF;
  res.render('CategoryMultiplayer')
})
// <내 편이 여러명 인게 좋아?>

// Y - others 



// <싱글플레이여도 다른 사람이 어느정도 있는게 좋아?>

// Y
app.get('/CategoryCoop' , function(req,res)
{
  res.render('CategoryCoop');
});

app.post('/CategoryCoop' , function(req,res)
{
  Multi_value = req.body.Multi_value;
  Multi_TF = req.body.Multi_TF;
  res.render('CategoryCoop')
})



//  <내 편이 여러명 인게 좋아?> 

// Y
app.get('/IsFree&GenreIsFreeToPlay' , function(req,res)
{
  res.render('IsFree&GenreIsFreeToPlay');
});


app.post('/IsFree&GenreIsFreeToPlay' , function(req,res)
{
  CategoryCoop_value = req.body.CategoryCoop_value;
  CategoryCoop_TF = req.body.CategoryCoop_TF;

  CategoryMMO_value = req.body.CategoryMMO_value;
  CategoryMMO_TF = req.body.CategoryMMO_TF;
  res.render('IsFree&GenreIsFreeToPlay')
})


// <무료인게 좋아? 아니면 상관없어?>

// Y 

app.get('/CausalVsDark' , function(req,res)
{
  res.render('CausalVsDark');
});

app.post('/CausalVsDark' , function(req,res)
{
  IsFree_value = req.body.IsFree_value;
  IsFree_TF = req.body.IsFree_TF;

  GenreIsFreeToPlay_value = req.body.GenreIsFreeToPlay_value;
  GenreIsFreeToPlay_TF = req.body.GenreIsFreeToPlay_TF;

  PurchaseAvail_value = req.body.PurchaseAvail_value;
  PurchaseAvail_TF = req.body.PurchaseAvail_TF;
  res.render('CausalVsDark');
})

// <밝은 분위기? 어두운 분위기?>

//  Y

app.get('/Cute&Music&Humor&Comedy' , function(req,res)
{
  res.render('Cute&Music&Humor&Comedy');
});

app.post('/Cute&Music&Humor&Comedy' , function(req,res)
{
  Causal_value = req.body.Causal_value;
  Causal_TF = req.body.Causal_TF;
  res.render('Cute&Music&Humor&Comedy');
})
// N

app.get('/Horror&Story-Rich&Relaxing' , function(req,res)
{
  res.render('Horror&Story-Rich&Relaxing');
});

app.post('/Horror&Story-Rich&Relaxing' , function(req,res)
{
  Dark_value = req.body.Dark_value;
  Dark_TF = req.body.Dark_TF;
  res.render('Horror&Story-Rich&Relaxing');
});
// <혹시 공포게임이 좋아? 힐링게임이 좋아?>

//  Y 

app.get('/Gore&Survive' , function(req,res)
{
  res.render('Gore&Survive');
});

app.post('/Gore&Survive' , function(req,res)
{
  Horror_value = req.body.Horror_value;
  Horror_TF = req.body.Horror_TF;

  res.render('Gore&Survive');
})

//  N - others 
//  --> CategoryStratgy 

// <그럼 귀엽거나 신나는게임이 좋아? 웃긴 병맛게임이 좋아?>

//  Y 

app.get('/CategoryStratgy' , function(req,res)
{
  res.render('CategoryStratgy');
});

app.post('/CategoryStratgy' , function(req,res)
{
  Cute_value = req.body.Cute_value;
  Cute_TF = req.body.Cute_TF;

  Music_value = req.body.Music_value;
  Music_TF = req.body.Music_TF;

  Humor_value = req.body.Humor_value;
  Humor_TF = req.body.Humor_TF;

  Comedy_value = req.body.Comedy_value;
  Comedy_TF = req.body.Comedy_TF;

  Horror_value = req.body.Horror_value;
  Horror_TF = req.body.Horror_TF;

  Relaxing_value = req.body.Relaxing_value;
  Relaxing_TF = req.body.Relaxing_TF;

  Story_Rich_value = req.body.Story_Rich_value;
  Story_Rich_TF = req.body.Story_Rich_TF;

  Gore_value = req.body.Gore_value;
  Gore_TF = req.body.Gore_TF;

  Survive_value = req.body.Survive_value;
  Survive_TF = req.body.Survive_TF;

  res.render('CategoryStratgy');
})

// <머리쓰는 두뇌게임 좋아해?>

// N 

app.get('/CategorySci-fi&CategoryFantasy' , function(req,res)
{
  res.render('CategorySci-fi&CategoryFantasy');
});

app.post('/CategorySci-fi&CategoryFantasy' , function(req,res)
{
  Stratgy_value = req.body.Stratgy_value;
  Stratgy_TF = req.body.Stratgy_TF;

  Puzzle_value = req.body.Puzzle_value;
  Puzzle_TF = req.body.Puzzle_TF;

  res.render('CategorySci-fi&CategoryFantasy');
})

// Y

app.get('/CategoryPuzzle', function(req,res)
{
  res.render('CategoryPuzzle');
});

app.post('/CategoryPuzzle', function(req,res)
{
  Stratgy_value = req.body.Stratgy_value;
  Stratgy_TF = req.body.Stratgy_TF;
  res.render('CategoryPuzzle');
})
// 

// <공상과학이나 판타지 좋아해?>

// Y - others 

app.get('/CategoryAction', function(req,res)
{
  res.render('CategoryAction');
});


app.post('/CategoryAction' , function(req,res)
{
  Sci_fi_value = req.body.Sci_fi_value;
  Sci_fi_TF = req.body.Sci_fi_TF;

  Fantasy_value = req.body.Fantasy_value;
  Fantasy_TF = req.body.Fantasy_TF;

  res.render('CategoryAction');

})
// <싸우는 게임 좋아해?>

//  N 

app.get('/sports&Racing', function(req,res)
{
  res.render('sports&Racing');
});

app.post('/sports&Racing', function(req,res)
{
  Action_value = req.body.Action_value;
  Action_TF = req.body.Action_TF;

  Shooter_value = req.body.Shooter_value;
  Shooter_TF = req.body.Shooter_TF;

  res.render('sports&Racing');
})
// Y

app.get('/CategoryViolent' , function(req,res)
{
  res.render('CategoryViolent');
});

app.post('/CategoryViolent' , function(req,res)
{
  Action_value = req.body.Action_value;
  Action_TF = req.body.Action_TF;

  res.render('CategoryViolent');
});



// <폭력적이어도 괜찮아?>

// Y - others 

app.get('/CategoryShooter', function(req,res)
{
  res.render('CategoryShooter');
});

app.post('/CategoryShooter' , function(req,res)
{
  Violent_value = req.body.Violent_value;
  Violent_TF = req.body.Violent_TF;

  res.render('CategoryShooter');
})

// <총 게임도 좋아해 ? > 

//  Y - others 
//  --> sports&Racing 


// <스포츠게임이나 레이싱게임은 어때?>

//  Y - others 

app.get('/Farm&Simulation&Building', function(req,res)
{
  res.render('Farm&Simulation&Building');
});

app.post('/Farm&Simulation&Building' , function(req,res)
{
  sports_value = req.body.sports_value;
  sports_TF = req.body.sports_TF;

  Racing_value = req.body.Racing_value;
  Racing_TF = req.body.Racing_TF;

  res.render('Farm&Simulation&Building');

})
// <무언가를 키우거나 만드는 게임은 어때?>

//  Y - others 

app.get('/Result' , function(req,res)
{
  res.render('Result')
});

app.post('/Result' , function(req,res)
{
  Farm_value = req.body.Farm_value;
  Farm_TF = req.body.Farm_TF;

  Simulation_value = req.body.Simulation_value;
  Simulation_TF = req.body.Simulation_TF;

  Build_value = req.body.Build_value;
  Build_TF = req.body.Build_TF;

  res.render('Result' ,
  {
    First_Tag:First_Tag,
    First_TF:First_TF,

    Multi_value:Multi_value,
    Multi_TF:Multi_TF,

    CategoryCoop_value:CategoryCoop_value,
    CategoryCoop_TF:CategoryCoop_TF,

    Dark_value:Dark_value,
    Dark_TF:Dark_TF, 


    Horror_value:Horror_value,
    Horror_TF:Horror_TF,

    Relaxing_value:Relaxing_value,
    Relaxing_TF:Relaxing_TF,

    Story_Rich_value:Story_Rich_value,
    Story_Rich_TF:Story_Rich_TF,

    CategoryMMO_value:CategoryMMO_value,
    CategoryMMO_TF:CategoryMMO_TF,

    IsFree_value:IsFree_value,
    IsFree_TF:IsFree_TF,

    GenreIsFreeToPlay_value:GenreIsFreeToPlay_value,
    GenreIsFreeToPlay_TF:GenreIsFreeToPlay_TF,

    PurchaseAvail_value:PurchaseAvail_value,
    PurchaseAvail_TF:PurchaseAvail_TF,

    Causal_value:Causal_value,
    Causal_TF:Causal_TF,

    Cute_value:Cute_value,
    Cute_TF:Cute_TF,

    Music_value:Music_value,
    Music_TF:Music_TF,

    Humor_value:Humor_value,
    Humor_TF:Humor_TF,

    Comedy_value:Comedy_value,
    Comedy_TF:Comedy_TF,

    Gore_value:Gore_value,
    Gore_TF:Gore_TF,

    Survive_value:Survive_value,
    Survive_TF:Survive_TF,

    Stratgy_value:Stratgy_value,
    Stratgy_TF:Stratgy_TF,

    Sci_fi_value:Sci_fi_value,
    Sci_fi_TF:Sci_fi_TF,

    Fantasy_value:Fantasy_value,
    Fantasy_TF:Fantasy_TF,

    Action_value:Action_value,
    Action_TF:Action_TF,

    Violent_value:Violent_value,
    Violent_TF:Violent_TF,

    sports_value:sports_value,
    sports_TF:sports_TF,

    Racing_value:Racing_value,
    Racing_TF:Racing_TF,

    Farm_value:Farm_value,
    Farm_TF:Farm_TF,

    Simulation_value:Simulation_value,
    Simulation_TF:Simulation_TF,

    Build_value:Build_value,
    Build_TF:Build_TF,

    Puzzle_value:Puzzle_value,
    Puzzle_TF:Puzzle_TF,

    Shooter_value:Shooter_value,
    Shooter_TF:Shooter_TF
  }
  );
})

app.listen(3000, function()
{
  console.log('Connected, 3000 port!!');
});


