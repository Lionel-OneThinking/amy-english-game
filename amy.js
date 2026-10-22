var VOCAB=[
{en:'apple',zh:'苹果',ex:'a round red or green fruit'},
{en:'book',zh:'书',ex:'you read it'},
{en:'breakfast',zh:'早餐',ex:'the first meal of the day'},
{en:'classroom',zh:'教室',ex:'the room where students have lessons'},
{en:'computer',zh:'电脑',ex:'a machine you use to type and play games'},
{en:'dictionary',zh:'字典',ex:'a book that tells you what words mean'},
{en:'dinner',zh:'晚餐',ex:'the big meal in the evening'},
{en:'exercise',zh:'锻炼',ex:'moving your body to stay healthy'},
{en:'family',zh:'家庭',ex:'your parents and brothers and sisters'},
{en:'friend',zh:'朋友',ex:'a person you like and play with'},
{en:'garden',zh:'花园',ex:'a place outside a house with flowers and grass'},
{en:'homework',zh:'作业',ex:'work the teacher gives you to do at home'},
{en:'hospital',zh:'医院',ex:'the place you go when you are sick'},
{en:'library',zh:'图书馆',ex:'a place with many books you can borrow'},
{en:'lunch',zh:'午餐',ex:'the meal you eat in the middle of the day'},
{en:'mountain',zh:'山',ex:'a very high place with rocks'},
{en:'museum',zh:'博物馆',ex:'a place where you can see old and interesting things'},
{en:'nature',zh:'大自然',ex:'trees, rivers, animals and the sky'},
{en:'ocean',zh:'海洋',ex:'a very big place with salt water'},
{en:'park',zh:'公园',ex:'a place with trees where people walk and play'},
{en:'picture',zh:'图片',ex:'a drawing or a photo'},
{en:'raincoat',zh:'雨衣',ex:'a coat that keeps the rain off you'},
{en:'school',zh:'学校',ex:'the place where children study'},
{en:'science',zh:'科学',ex:'the study of how things work'},
{en:'sport',zh:'运动',ex:'games you play with your body'},
{en:'station',zh:'车站',ex:'the place where trains stop'},
{en:'subject',zh:'科目',ex:'something you study at school, like Maths'},
{en:'teacher',zh:'老师',ex:'the person who helps students learn'},
{en:'ticket',zh:'票',ex:'a small piece of paper that lets you travel or enter'},
{en:'travel',zh:'旅行',ex:'going to a place far away'},
{en:'umbrella',zh:'雨伞',ex:'a thing that keeps the rain off you'},
{en:'vegetable',zh:'蔬菜',ex:'healthy food like carrots and beans'},
{en:'weekend',zh:'周末',ex:'Saturday and Sunday'},
{en:'window',zh:'窗户',ex:'you look outside through it'},
{en:'animal',zh:'动物',ex:'a living thing like a dog or a lion'}
];

var SENTENCES=[
{sentence:'I usually have milk and bread for ___.',answer:'breakfast',wrong:['dinner','mountain','ticket']},
{sentence:'My ___ helps me with my lessons at school.',answer:'teacher',wrong:['ocean','umbrella','weekend']},
{sentence:'It is raining, so take your ___.',answer:'umbrella',wrong:['garden','science','book']},
{sentence:'I borrow books from the ___.',answer:'library',wrong:['hospital','station','family']},
{sentence:'We eat ___ at about twelve o clock.',answer:'lunch',wrong:['breakfast','dinner','sport']},
{sentence:'My ___ and I play football in the park.',answer:'friend',wrong:['dictionary','window','subject']},
{sentence:'We saw many old things in the ___.',answer:'museum',wrong:['ocean','vegetable','raincoat']},
{sentence:'I need a ___ to take the train.',answer:'ticket',wrong:['picture','nature','classroom']},
{sentence:'Carrots and beans are healthy ___.',answer:'vegetables',wrong:['mountains','sports','teachers']},
{sentence:'On ___ I do not go to school.',answer:'weekend',wrong:['lunch','science','station']},
{sentence:'The ___ is where the train stops.',answer:'station',wrong:['garden','picture','nature']},
{sentence:'I do my ___ after school every day.',answer:'homework',wrong:['breakfast','sport','travel']},
{sentence:'We study ___ to learn how things work.',answer:'science',wrong:['lunch','window','ticket']},
{sentence:'There are many flowers in the ___.',answer:'garden',wrong:['library','classroom','hospital']},
{sentence:'You can see a nice ___ on the wall.',answer:'picture',wrong:['vegetable','mountain','subject']}
];

var SPEECH=[
{q:'What is your name?',a:'My name is Amy.'},
{q:'How old are you?',a:'I am seven years old.'},
{q:'Where do you live?',a:'I live in Singapore.'},
{q:'What is your favourite subject?',a:'My favourite subject is English.'},
{q:'Do you like reading?',a:'Yes, I like reading very much.'},
{q:'What do you do at the weekend?',a:'I play with my friends at the weekend.'},
{q:'Can you swim?',a:'Yes, I can swim a little.'},
{q:'What time do you get up?',a:'I get up at seven o clock.'},
{q:'How do you go to school?',a:'I go to school by bus.'},
{q:'What did you have for breakfast?',a:'I had bread and milk for breakfast.'},
{q:'Who is your best friend?',a:'My best friend is Lily.'},
{q:'Why do you like animals?',a:'Because they are cute and funny.'},
{q:'Where is the library?',a:'It is next to the school.'},
{q:'What are you doing?',a:'I am reading a book.'},
{q:'How many brothers and sisters do you have?',a:'I have one brother and two sisters.'}
];

var SHAPES=[{en:'circle',icon:'⚪'},{en:'square',icon:'🟩'},{en:'triangle',icon:'🔺'},{en:'rectangle',icon:'▬'},{en:'star',icon:'⭐'},{en:'heart',icon:'❤️'}];
var LEVELS=[{name:'Stone Beast',emoji:'🦁',maxExp:60},{name:'Shadow Dragon',emoji:'🐉',maxExp:80},{name:'Gargoyle',emoji:'🗿',maxExp:100},{name:'Sea Monster',emoji:'🧜‍♀️',maxExp:120},{name:'Math Devil',emoji:'👹',maxExp:140}];
var RANKS=[{d:0,name:'Apprentice',icon:'🧙‍♀️'},{d:3,name:'Trainee Mage',icon:'🧝‍♀️'},{d:7,name:'Junior Mage',icon:'🧚‍♀️'},{d:14,name:'Middle Mage',icon:'🦸‍♀️'},{d:30,name:'Senior Mage',icon:'👸'},{d:60,name:'Grand Mage',icon:'👑'}];
var TREASURES=[{icon:'💠',name:'Memory Crystal'},{icon:'🎺',name:'Brave Flute'},{icon:'📏',name:'Wisdom Ruler'},{icon:'🛡️',name:'Hero Shield'},{icon:'💎',name:'Magic Gem'},{icon:'👑',name:'Hero Crown'},{icon:'📖',name:'Book of Knowledge'},{icon:'🌟',name:'Star Piece'},{icon:'🍀',name:'Lucky Clover'}];
var QUESTS=[
{id:'vocab',icon:'📖',name:'KET Vocabulary',qn:5,reward:48},
{id:'fill',icon:'✍️',name:'KET Gap Fill',qn:5,reward:48},
{id:'speech',icon:'🎙️',name:'KET Q and A',qn:5,reward:64},
{id:'spell',icon:'🔤',name:'Word Spelling',qn:4,reward:40},
{id:'math',icon:'🔢',name:'Singapore Math P1',qn:5,reward:48},
{id:'boss',icon:'⚔️',name:'Boss Challenge',qn:5,reward:80}
];

var PWD='1234';
var NEW_RATIO=0.3;      // 每天出新题的概率（0.3=30%新题,70%旧题）；想改成 0.2/0.4 改这里
var RECENT_AS_NEW=2;    // 最近几期算“新题”；想改成 1 期或 3 期改这里

var state={exp:0,bossLevel:0,questsDone:{},inventory:[],keys:0,date:'',days:{},stats:{}};
var currentQuiz=null,quizList=[],quizIndex=0,quizRight=0,quizType='',quizTotal=8;
var soundOn=true,audioCtx=null;
var usedVocab=[],usedSentences=[],usedSpeech=[];

function today(){return new Date().toISOString().slice(0,10)}
function load(){try{var s=localStorage.getItem('amy_adv_v8');if(s){var o=JSON.parse(s);if(o&&o.stats&&o.inventory&&o.days){state=o}}}catch(e){}}
function save(){try{localStorage.setItem('amy_adv_v8',JSON.stringify(state))}catch(e){}}
function resetDay(){if(state.date!==today()){state.date=today();state.questsDone={};usedVocab=[];usedSentences=[];usedSpeech=[];save()}}

/* ============ 自定义词：按期存储 ============ */
var PERIOD_KEY='amy_periods_v1';

function parseWordsText(txt){
  var arr=[];
  (txt||'').split('\n').forEach(function(line){
    line=line.trim(); if(!line) return;
    var p=line.split(',');
    if(p.length>=2){
      var en=p[0].trim(), zh=p[1].trim(), ex=p.slice(2).join(',').trim();
      if(en&&zh) arr.push({en:en,zh:zh,ex:ex||zh});
    }
  });
  return arr;
}
function parseSentencesText(txt){
  var arr=[];
  (txt||'').split('\n').forEach(function(line){
    line=line.trim(); if(!line) return;
    var p=line.split(',');
    if(p.length>=2){
      var s=p[0].trim(), ans=p[1].trim();
      var wrong=p.slice(2).map(function(x){return x.trim()}).filter(Boolean);
      if(s&&ans){ if(!wrong.length) wrong=['apple','book','park']; arr.push({sentence:s,answer:ans,wrong:wrong}); }
    }
  });
  return arr;
}
function parseDialogsText(txt){
  var arr=[];
  (txt||'').split('\n').forEach(function(line){
    line=line.trim(); if(!line) return;
    var p=line.split(',');
    if(p.length>=2){
      var q=p[0].trim(), a=p.slice(1).join(',').trim();
      if(q&&a) arr.push({q:q,a:a});
    }
  });
  return arr;
}

function getPeriods(){
  // 惰性迁移：把旧版单文本框数据并入一期
  var raw=localStorage.getItem(PERIOD_KEY);
  if(!raw){
    var ow=localStorage.getItem('amy_extra_words')||'';
    var os=localStorage.getItem('amy_extra_sentences')||'';
    var od=localStorage.getItem('amy_extra_dialogs')||'';
    if(ow||os||od){
      var migrated=[{id:'legacy',tag:'导入期(旧)',words:parseWordsText(ow),sentences:parseSentencesText(os),dialogs:parseDialogsText(od),ts:Date.now()-1000}];
      localStorage.setItem(PERIOD_KEY,JSON.stringify(migrated));
      localStorage.removeItem('amy_extra_words');localStorage.removeItem('amy_extra_sentences');localStorage.removeItem('amy_extra_dialogs');
    } else { localStorage.setItem(PERIOD_KEY,'[]'); }
    raw=localStorage.getItem(PERIOD_KEY);
  }
  try{ var a=JSON.parse(raw); if(!Array.isArray(a)) a=[]; return a; }catch(e){ return []; }
}
function savePeriods(arr){ localStorage.setItem(PERIOD_KEY,JSON.stringify(arr)); }

function addPeriod(wTxt,sTxt,dTxt){
  var ps=getPeriods();
  var w=parseWordsText(wTxt), s=parseSentencesText(sTxt), d=parseDialogsText(dTxt);
  if(!w.length&&!s.length&&!d.length){ alert('三个框至少要填一个哦'); return false; }
  ps.push({id:'p'+Date.now(),tag:'第'+(ps.length+1)+'期',words:w,sentences:s,dialogs:d,ts:Date.now()});
  savePeriods(ps);
  return true;
}
function deletePeriod(id){
  var ps=getPeriods().filter(function(p){return p.id!==id});
  savePeriods(ps);
}

/* ============ 抽题池：内置归旧题，最近N期为新题 ============ */
function buildPools(type){
  var ps=getPeriods();
  var old=[], neu=[];
  var newStart=ps.length-RECENT_AS_NEW;
  ps.forEach(function(p,idx){
    var target=(idx>=newStart)?neu:old;
    if(type==='vocab') target=target.concat(p.words||[]);
    if(type==='fill') target=target.concat(p.sentences||[]);
    if(type==='speech') target=target.concat(p.dialogs||[]);
    // 上面 concat 生成新数组，需重新赋值：
    if(type==='vocab'){ if(idx>=newStart) neu=neu.concat(p.words||[]); else old=old.concat(p.words||[]); }
    if(type==='fill'){ if(idx>=newStart) neu=neu.concat(p.sentences||[]); else old=old.concat(p.sentences||[]); }
    if(type==='speech'){ if(idx>=newStart) neu=neu.concat(p.dialogs||[]); else old=old.concat(p.dialogs||[]); }
  });
  if(type==='vocab') old=VOCAB.slice().concat(old);
  if(type==='fill') old=SENTENCES.slice().concat(old);
  if(type==='speech') old=SPEECH.slice().concat(old);
  return {old:old, neu:neu};
}

function keyOfVocab(it){return it.en}
function keyOfSent(it){return it.sentence}
function keyOfDial(it){return it.q}

function pickUnseenByKey(pool,usedKeys,maxKeep){
  if(!pool.length) return null;
  var keyFn=pool===null?null:null; // placeholder
  var unseen=pool.filter(function(it){return usedKeys.indexOf(argKey(it))<0});
  if(!unseen.length){
    pool.forEach(function(it){var k=argKey(it);var i=usedKeys.indexOf(k);if(i>=0)usedKeys.splice(i,1);});
    unseen=pool.slice();
  }
  var item=unseen[Math.floor(Math.random()*unseen.length)];
  usedKeys.push(argKey(item));
  while(usedKeys.length>maxKeep) usedKeys.shift();
  return item;
}
var _keyMode='vocab';
function argKey(it){ return _keyMode==='vocab'?it.en:(_keyMode==='fill'?it.sentence:it.q); }

function weightedPick(type,usedKeys,maxKeep){
  var pools=buildPools(type);
  var all=pools.old.concat(pools.neu);
  if(!all.length) return null;
  // 选来源池
  var useNew = pools.neu.length>0 && Math.random()<NEW_RATIO;
  var primary=useNew?pools.neu:pools.old;
  var fallback=useNew?pools.old:pools.neu;
  if(!primary.length){primary=fallback;fallback=null;}
  _keyMode=type;
  var item=pickUnseenByKey(primary,usedKeys,maxKeep);
  if(!item&&fallback) item=pickUnseenByKey(fallback,usedKeys,maxKeep);
  return {item:item, all:all};
}

function pick(arr,n){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}
  return a.slice(0,n);
}

function dayCount(){return Object.keys(state.days).length}
function currentRank(){var d=dayCount(),r=RANKS[0];for(var i=0;i<RANKS.length;i++){if(d>=RANKS[i].d)r=RANKS[i]}return r}
function nextRank(){var d=dayCount();for(var i=0;i<RANKS.length;i++){if(d<RANKS[i].d)return RANKS[i]}return null}

/* ============ 音效 ============ */
function tone(freq,dur,type,vol,delay){if(!soundOn)return;try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();var st=audioCtx.currentTime+(delay||0);var o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type||'sine';o.frequency.setValueAtTime(freq,st);g.gain.setValueAtTime(vol||0.15,st);g.gain.exponentialRampToValueAtTime(0.001,st+dur);o.connect(g);g.connect(audioCtx.destination);o.start(st);o.stop(st+dur);}catch(e){}}
function noise(dur,vol,delay){if(!soundOn)return;try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();var st=audioCtx.currentTime+(delay||0);var len=Math.floor(audioCtx.sampleRate*dur);var buf=audioCtx.createBuffer(1,len,audioCtx.sampleRate);var data=buf.getChannelData(0);for(var i=0;i<len;i++){data[i]=(Math.random()*2-1)*(1-i/len)}var src=audioCtx.createBufferSource();src.buffer=buf;var g=audioCtx.createGain();g.gain.value=vol||0.12;var f=audioCtx.createBiquadFilter();f.type='highpass';f.frequency.value=800;src.connect(f);f.connect(g);g.connect(audioCtx.destination);src.start(st);}catch(e){}}
function sfxClick(){tone(620,0.07,'triangle',0.12)}
function sfxOpen(){tone(400,0.1,'sine',0.1);tone(700,0.12,'sine',0.08,0.06)}
function sfxRight(){tone(880,0.12,'sine',0.14);tone(1180,0.16,'sine',0.12,0.1);tone(1560,0.2,'triangle',0.1,0.2);noise(0.25,0.06,0.05)}
function sfxWrong(){tone(320,0.22,'square',0.14);tone(220,0.26,'square',0.14,0.22);tone(320,0.22,'square',0.12,0.46)}
function sfxTreasure(){tone(1046,0.12,'triangle',0.14);tone(1318,0.12,'triangle',0.14,0.1);tone(1760,0.22,'triangle',0.14,0.2);noise(0.3,0.05,0.15)}
function sfxWin(){[523,659,784,1046,1318].forEach(function(f,i){tone(f,0.28,'triangle',0.16,i*0.13)});tone(110,0.5,'sawtooth',0.1,0.1);tone(82,0.6,'sawtooth',0.1,0.4);noise(0.6,0.08,0.2)}
function sfxAllClear(){[523,659,784,1046,1318,1568,2093].forEach(function(f,i){tone(f,0.3,'triangle',0.16,i*0.12)});for(var i=0;i<6;i++){noise(0.2,0.06,0.3+i*0.18)}}
function sfxBossChallenge(){tone(440,0.15,'sawtooth',0.12);tone(330,0.15,'sawtooth',0.12,0.15);tone(550,0.2,'sawtooth',0.14,0.3);noise(0.4,0.08,0.1)}
function toggleSound(){soundOn=!soundOn;document.getElementById('sound-btn').textContent=soundOn?'🔊 Sound On':'🔇 Sound Off';if(soundOn)sfxClick()}

/* ============ 渲染 ============ */
function renderAll(){
  var finished=state.bossLevel>=LEVELS.length;
  var lv=finished?LEVELS[LEVELS.length-1]:LEVELS[state.bossLevel];
  var rank=currentRank();
  document.getElementById('boss-avatar').textContent=finished?'🏆':lv.emoji;
  document.getElementById('boss-name').textContent=finished?'🏆 All Clear!':'Boss: '+lv.name;
  var pct=finished?100:Math.min(100,state.exp/lv.maxExp*100);
  document.getElementById('boss-hp-fill').style.width=pct+'%';
  document.getElementById('boss-hp-text').textContent=finished?'🏆 You won!':'HP '+state.exp+'/'+lv.maxExp;
  document.getElementById('avatar').textContent=rank.icon;
  document.getElementById('hero-name').textContent='Amy · '+rank.name;
  document.getElementById('exp-fill').style.width=pct+'%';
  document.getElementById('exp-text').textContent=finished?'🏆 Clear':'Energy '+state.exp+' / '+lv.maxExp;
  var nr=nextRank();
  document.getElementById('streak-text').textContent='Checked in '+dayCount()+' days'+(nr?' · '+(nr.d-dayCount())+' days to '+nr.name:' · top rank!');
  renderQuests();renderInventory();
  document.getElementById('keys-display').textContent=state.keys>0?'🗝️ Keys × '+state.keys:'';
}
function renderQuests(){
  var html='';
  for(var i=0;i<QUESTS.length;i++){
    var q=QUESTS[i],done=!!state.questsDone[q.id];
    var cls=q.id==='boss'?'quest-item boss-quest'+(done?' done':''):'quest-item'+(done?' done':'');
    var btnCls=q.id==='boss'?(done?'btn-success':'btn-boss'):(done?'btn-success':'btn-primary');
    html+='<div class="'+cls+'"><div class="quest-left"><div class="quest-icon">'+q.icon+'</div><div><div class="quest-name">'+q.name+'</div><div class="quest-reward">'+q.qn+' questions · up to +'+q.reward+' energy</div></div></div><button class="btn '+btnCls+'" '+(done?'disabled':'')+' onclick="startQuiz(\''+q.id+'\')">'+(done?'✅ Done':'⚔️ Go')+'</button></div>';
  }
  document.getElementById('quest-list').innerHTML=html;
}
function renderInventory(){
  var items=state.inventory.slice(-8),html='';
  for(var i=0;i<8;i++){
    if(i<items.length){html+='<div class="inv-slot"><div class="inv-icon">'+items[i].icon+'</div><div class="inv-name">'+items[i].name+'</div></div>'}
    else{html+='<div class="inv-slot"><div class="inv-empty">—</div></div>'}
  }
  document.getElementById('inventory-grid').innerHTML=html;
}

/* ============ 出题 ============ */
function genVocab(hard){
  var r=weightedPick('vocab',usedVocab,20);
  var bank=r.all;
  var c=r.item;
  var others=bank.filter(function(v){return v.en!==c.en});
  if(hard){
    var ws=pick(others,3).map(function(v){return v.ex});
    return{qEn:'Which word means: "'+c.ex+'"?',opts:pick(ws.concat([c.en]),4),answer:c.en};
  }
  if(Math.random()>0.5){
    var ws2=pick(others,3).map(function(v){return v.ex});
    return{qEn:'What does "'+c.en+'" mean?',opts:pick(ws2.concat([c.ex]),4),answer:c.ex};
  }
  var ws3=pick(others,3).map(function(v){return v.en});
  return{qEn:'Which word means: '+c.ex+'?',opts:pick(ws3.concat([c.en]),4),answer:c.en};
}
function genFill(hard){
  var r=weightedPick('fill',usedSentences,12);
  var c=r.item;
  var ws=pick(c.wrong.filter(function(v){return v!==c.answer}),3);
  if(hard){
    return{qEn:'Complete: '+c.sentence+' (Hint: '+c.wrong[0]+' or '+c.answer+'?)',opts:pick(ws.concat([c.answer]),4),answer:c.answer};
  }
  return{qEn:'Fill the gap: '+c.sentence,opts:pick(ws.concat([c.answer]),4),answer:c.answer};
}
function genSpeech(hard){
  var r=weightedPick('speech',usedSpeech,12);
  var bank=r.all;
  var c=r.item;
  if(hard){
    var ws2=pick(bank.filter(function(v){return v.q!==c.q}),3).map(function(v){return v.q});
    return{qEn:'Which question matches: "'+c.a+'"?',opts:pick(ws2.concat([c.q]),4),answer:c.q};
  }
  var ws=pick(bank.filter(function(v){return v.q!==c.q}),3).map(function(v){return v.a});
  return{qEn:c.q+'  Choose the best answer.',opts:pick(ws.concat([c.a]),4),answer:c.a};
}
function scramble(w){var a=w.split('');for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a.join('')}
function genSpell(hard){
  var r=weightedPick('vocab',usedVocab,20);
  var bank=r.all;
  var c=r.item;
  var minLen=hard?7:4;
  var guard=0;
  while(c.en.length<minLen&&guard<50){c=bank[Math.floor(Math.random()*bank.length)];guard++}
  var sc=scramble(c.en);
  while(sc===c.en)sc=scramble(c.en);
  var ws=pick(bank.filter(function(v){return v.en!==c.en&&v.en.length>2}),3).map(function(v){return v.en});
  if(hard){
    return{qEn:'Unscramble: '+sc.toUpperCase()+'  (No hint, '+c.en.length+' letters)',opts:pick(ws.concat([c.en]),4),answer:c.en};
  }
  return{qEn:'Unscramble the letters: '+sc.toUpperCase()+'  ('+c.ex+')',opts:pick(ws.concat([c.en]),4),answer:c.en};
}
function numOpts(ans,range){
  var ws=[],guard=0;
  while(ws.length<3&&guard<120){guard++;var v=ans+Math.floor(Math.random()*range)-Math.floor(range/2);if(v>=0&&v!==ans&&ws.indexOf(v)<0)ws.push(String(v));}
  while(ws.length<3){ws.push(String(ans+ws.length+1))}
  return ws.concat([String(ans)]);
}
function genMath(hard){
  var kind=hard?Math.floor(Math.random()*4):Math.floor(Math.random()*6);
  if(kind===0){var a=Math.floor(Math.random()*11)+1,b=Math.floor(Math.random()*11)+1;if(hard){a=Math.floor(Math.random()*30)+5;b=Math.floor(Math.random()*20)+3}var ans=a+b;return{qEn:'What is '+a+' + '+b+'?',opts:pick(numOpts(ans,hard?15:8),4),answer:String(ans)}}
  if(kind===1){var a2=Math.floor(Math.random()*15)+5,b2=Math.floor(Math.random()*a2)+1;if(hard){a2=Math.floor(Math.random()*40)+10;b2=Math.floor(Math.random()*25)+1}var ans2=a2-b2;return{qEn:'What is '+a2+' - '+b2+'?',opts:pick(numOpts(ans2,hard?15:8),4),answer:String(ans2)}}
  if(kind===2){var x=Math.floor(Math.random()*20)+1,y=Math.floor(Math.random()*20)+1;if(hard){x=Math.floor(Math.random()*50)+1;y=Math.floor(Math.random()*50)+1}while(x===y)y=Math.floor(Math.random()*20)+1;var ans3=x>y?'bigger':'smaller';var ws3=['bigger','smaller','same'].filter(function(v){return v!==ans3});return{qEn:'Compare: Is '+x+' '+ans3+' than '+y+'?',opts:pick(ws3.concat([ans3]),4),answer:ans3}}
  var s=SHAPES[Math.floor(Math.random()*SHAPES.length)];var ws4=pick(SHAPES.filter(function(v){return v.en!==s.en}),3).map(function(v){return v.en});return{qEn:'What shape is '+s.icon+'?',opts:pick(ws4.concat([s.en]),4),answer:s.en};
}
function genBossQuiz(){return[genVocab(true),genFill(true),genSpeech(true),genSpell(true),genMath(true)]}
function genQuiz(type){
  if(type==='vocab')return genVocab(false);
  if(type==='fill')return genFill(false);
  if(type==='speech')return genSpeech(false);
  if(type==='spell')return genSpell(false);
  return genMath(false);
}
function startQuiz(type){
  sfxClick();quizType=type;quizList=[];quizIndex=0;quizRight=0;
  for(var i=0;i<QUESTS.length;i++){if(QUESTS[i].id===type)quizTotal=QUESTS[i].qn}
  if(type==='boss'){sfxBossChallenge();quizList=genBossQuiz()}
  else{for(var k=0;k<quizTotal;k++)quizList.push(genQuiz(type))}
  showQuestion();
}
function getBossEmoji(){return state.bossLevel>=LEVELS.length?'🏆':LEVELS[state.bossLevel].emoji}
function showQuestion(){
  currentQuiz=quizList[quizIndex];
  var box=document.createElement('div');box.className='quiz-options';
  for(var i=0;i<currentQuiz.opts.length;i++){
    var d=document.createElement('div');d.className='quiz-option';
    d.innerHTML='<div class="op-text">'+currentQuiz.opts[i]+'</div>';
    d.setAttribute('data-check',currentQuiz.opts[i]);
    d.onclick=function(){checkAnswer(this,this.getAttribute('data-check'))};
    box.appendChild(d);
  }
  var pctProgress=(quizIndex/quizTotal)*100;
  var titleText=quizType==='boss'?'👹 BOSS CHALLENGE':'⚔️ Question '+(quizIndex+1)+' / '+quizTotal;
  showModal('<h2>'+titleText+'</h2><div class="battle-scene" id="battle-scene"><div class="battle-hero" id="battle-hero">🧙‍♀️</div><div class="battle-swords">⚡</div><div class="battle-boss" id="battle-boss">'+getBossEmoji()+'</div></div><div class="quiz-progress"><div class="quiz-progress-fill" style="width:'+pctProgress+'%"></div></div><div class="quiz-question">'+currentQuiz.qEn+'</div><div id="quiz-box-holder"></div><div id="quiz-msg" style="text-align:center;margin-top:10px;font-size:14px"></div>');
  document.getElementById('quiz-box-holder').appendChild(box);sfxOpen();
}
function spawnStars(){var scene=document.getElementById('battle-scene');if(!scene)return;var stars=['⭐','✨','💫','🌟'];for(var i=0;i<5;i++){var s=document.createElement('span');s.className='star-burst';s.textContent=stars[Math.floor(Math.random()*stars.length)];s.style.left='55%';s.style.top='30%';s.style.setProperty('--tx',(Math.random()*60-30)+'px');s.style.setProperty('--ty',(Math.random()*-40-10)+'px');scene.appendChild(s);(function(el){setTimeout(function(){el.remove()},800)})(s);}}
function setBattleState(correct){var hero=document.getElementById('battle-hero');var boss=document.getElementById('battle-boss');if(!hero||!boss)return;if(correct){hero.classList.remove('sad');boss.classList.remove('smug');hero.classList.add('happy');boss.classList.add('hit');spawnStars();setTimeout(function(){hero.classList.remove('happy');boss.classList.remove('hit')},700);}else{hero.classList.remove('happy');boss.classList.remove('hit');hero.classList.add('sad');boss.classList.add('smug');setTimeout(function(){hero.classList.remove('sad');boss.classList.remove('smug')},700);}}
function checkAnswer(el,chosen){
  if(!currentQuiz)return;sfxClick();
  var opts=document.querySelectorAll('.quiz-option');for(var i=0;i<opts.length;i++){opts[i].style.pointerEvents='none'}
  var ok=String(chosen)===String(currentQuiz.answer);recordStats(ok);setBattleState(ok);
  if(ok){quizRight++;sfxRight();el.classList.add('correct');document.getElementById('quiz-msg').innerHTML='<span style="color:#43e97b;font-weight:bold">🎉 Well done!</span>';currentQuiz=null;setTimeout(nextQuestion,900);}
  else{sfxWrong();shakeBoss();el.classList.add('wrong');document.getElementById('quiz-msg').innerHTML='<span style="color:#e74c3c">🚨 Oops! Try another one.</span>';setTimeout(function(){var os=document.querySelectorAll('.quiz-option');for(var i=0;i<os.length;i++){os[i].style.pointerEvents='';os[i].classList.remove('wrong')}var m=document.getElementById('quiz-msg');if(m)m.innerHTML='';},1000);}
}
function nextQuestion(){quizIndex++;if(quizIndex>=quizTotal){closeModal();finishQuiz();return}showQuestion()}
function shakeBoss(){var c=document.getElementById('boss-card');c.classList.add('shake');setTimeout(function(){c.classList.remove('shake')},500)}
function recordStats(correct){var d=state.date||today();if(!state.stats)state.stats={};if(!state.stats[d])state.stats[d]={tasks:0,energy:0,answers:0,correct:0};state.stats[d].answers++;if(correct)state.stats[d].correct++;save();}
function finishQuiz(){
  var base=0;for(var i=0;i<QUESTS.length;i++){if(QUESTS[i].id===quizType)base=QUESTS[i].reward}
  var reward=Math.round(base*quizRight/quizTotal);
  state.questsDone[quizType]=true;state.exp+=reward;state.days[today()]=true;
  var d=state.date||today();if(!state.stats[d])state.stats[d]={tasks:0,energy:0,answers:0,correct:0};state.stats[d].tasks++;state.stats[d].energy+=reward;
  var t=TREASURES[Math.floor(Math.random()*TREASURES.length)];var got=false;
  if(quizRight>=Math.ceil(quizTotal*0.5)){state.inventory.push({icon:t.icon,name:t.name});got=true}
  save();renderAll();if(got)setTimeout(sfxTreasure,300);
  if(state.bossLevel<LEVELS.length&&state.exp>=LEVELS[state.bossLevel].maxExp){defeatBoss()}
  else{showCelebrate('✨ Quest Clear!','Correct '+quizRight+' / '+quizTotal+', Energy +'+reward,(got?'Treasure: '+t.icon+' '+t.name:'Get half right to win a treasure!'))}
}
function defeatBoss(){
  var lv=LEVELS[state.bossLevel];state.exp=state.exp-lv.maxExp;state.keys++;state.bossLevel++;
  var finished=state.bossLevel>=LEVELS.length;if(finished)state.exp=0;
  save();renderAll();confetti();flashScreen();
  if(finished){sfxAllClear();showCelebrate('🏆 All Clear!','Amy beat every boss!','5 keys collected. Amazing!')}
  else{sfxWin();showCelebrate('⚔️ '+lv.name+' defeated!','Key +1 🗝️','Next boss: '+LEVELS[state.bossLevel].name)}
}
function flashScreen(){var f=document.createElement('div');f.className='flash on';document.body.appendChild(f);setTimeout(function(){f.remove()},500)}
function showCelebrate(title,sub,tip){showModal('<div class="celebration"><div class="big-emoji">🎉</div><h2>'+title+'</h2><p>'+sub+'</p><p style="font-size:13px;color:#888">'+(tip||'')+'</p><button class="btn btn-primary" onclick="closeModal()">Continue</button></div>')}
function showModal(html){document.getElementById('modal-content').innerHTML=html;document.getElementById('modal-overlay').classList.remove('hidden')}
function closeModal(){document.getElementById('modal-overlay').classList.add('hidden')}
function closeModalOutside(e){if(e.target.id==='modal-overlay')closeModal()}

/* ============ 家长中心（按期管理） ============ */
function openParentCenter(){
  sfxClick();
  showModal('<h2>👨‍👩‍👧 家长中心</h2><p style="text-align:center;font-size:13px;color:#888">请输入密码</p><input class="password-input" id="pwd" type="password" placeholder="默认密码 1234"><div style="text-align:center;margin-top:8px"><button class="btn btn-primary" onclick="checkPwd()">确定</button> <button class="btn btn-success" onclick="closeModal()">返回</button></div>');
}
function checkPwd(){var v=document.getElementById('pwd').value;if(v===PWD){renderParent()}else{sfxWrong();alert('密码不对哦（默认1234）')}}

function renderParent(){
  var ps=getPeriods();
  var rows='';
  if(!ps.length){rows='<div class="period-empty">还没有自定义期，点下面“添加新一期”。</div>';}
  else{
    ps.forEach(function(p,i){
      var isNew=(i>=ps.length-RECENT_AS_NEW);
      var tag=isNew?'<span class="tag-new">新题</span>':'<span class="tag-old">旧题</span>';
      var cnt=(p.words||[]).length+'词 / '+(p.sentences||[]).length+'句 / '+(p.dialogs||[]).length+'问答';
      rows+='<div class="period-row"><div class="period-meta"><b>'+p.tag+'</b> '+tag+'<div class="period-cnt">'+cnt+'</div></div><button class="btn btn-danger btn-sm" onclick="confirmDeletePeriod(\''+p.id+'\')">删除</button></div>';
    });
  }
  var newPct=Math.round(NEW_RATIO*100);
  showModal('<h2>👨‍👩‍👧 家长中心</h2>'+
    '<div class="parent-note">当前规则：最近 <b>'+RECENT_AS_NEW+'</b> 期算新题，每天练习约 <b>'+newPct+'%</b> 出新题、<b>'+(100-newPct)+'%</b> 出旧题；内置题库归入旧题池。想调整改 amy.js 顶部 NEW_RATIO / RECENT_AS_NEW。</div>'+
    '<div class="parent-label">📚 已添加的期（共 '+ps.length+' 期）</div>'+
    '<div class="period-list">'+rows+'</div>'+
    '<div class="parent-row"><button class="btn btn-primary" onclick="showAddPeriod()">➕ 添加新一期</button><button class="btn btn-warning" onclick="showReport()">看周报</button></div>'+
    '<div class="parent-row"><button class="btn btn-danger" onclick="confirmClearAll()">清空所有自定义期</button><button class="btn btn-success" onclick="closeModal()">关闭</button></div>');
}
function showAddPeriod(){
  showModal('<h2>➕ 添加新一期</h2>'+
    '<div class="parent-label">📖 词汇</div><div class="parent-tip">每行一个：英文,中文,英文解释（解释可不填）</div>'+
    '<textarea class="parent-textarea" id="npWords" rows="4" placeholder="tiger,老虎,a big wild animal"></textarea>'+
    '<div class="parent-label">✍️ 填空句</div><div class="parent-tip">每行一个：句子(带___),正确答案,干扰词,干扰词</div>'+
    '<textarea class="parent-textarea" id="npSentences" rows="4" placeholder="I see a ___ in the zoo,tiger,lion,apple"></textarea>'+
    '<div class="parent-label">🎙️ 问答</div><div class="parent-tip">每行一个：问题,回答</div>'+
    '<textarea class="parent-textarea" id="npDialogs" rows="4" placeholder="What is your favourite colour?,My favourite colour is pink"></textarea>'+
    '<div class="parent-row"><button class="btn btn-success" onclick="doAddPeriod()">保存这一期</button><button class="btn" style="background:#999;color:#fff" onclick="renderParent()">取消返回</button></div>');
}
function doAddPeriod(){
  var ok=addPeriod(document.getElementById('npWords').value,document.getElementById('npSentences').value,document.getElementById('npDialogs').value);
  if(ok){sfxTreasure();alert('已加入新一期！回到任务就能抽到（新一期算新题，约'+Math.round(NEW_RATIO*100)+'%概率出现）。');renderParent();}
}
function confirmDeletePeriod(id){
  if(!confirm('确定删除这一期吗？删除后该期的词不再出现。'))return;
  deletePeriod(id);renderParent();
}
function confirmClearAll(){
  if(!confirm('确定清空所有自定义期吗？内置题库不受影响。'))return;
  savePeriods([]);renderParent();
}
function showReport(){
  var stats=state.stats||{},days=[];
  for(var i=6;i>=0;i--){var d=new Date();d.setDate(d.getDate()-i);var key=d.toISOString().slice(0,10);days.push({key:key,data:stats[key]||{tasks:0,energy:0,answers:0,correct:0}});}
  var tasks=0,energy=0,answers=0,correct=0;
  days.forEach(function(d){tasks+=d.data.tasks;energy+=d.data.energy;answers+=d.data.answers;correct+=d.data.correct});
  var acc=answers?Math.round(correct/answers*100):0,rows='';
  days.forEach(function(d){
    var pct=Math.min(100,d.data.tasks/6*100);
    var dacc=d.data.answers?Math.round(d.data.correct/d.data.answers*100):0;
    rows+='<div class="day-row"><div class="day-date">'+d.key.slice(5)+'</div><div class="day-tasks">'+d.data.tasks+'</div><div class="day-energy">+'+d.data.energy+'</div><div class="day-bar"><div class="day-bar-fill" style="width:'+pct+'%"></div></div><div class="day-acc">'+(d.data.answers?dacc+'%':'—')+'</div></div>';
  });
  var rank=currentRank();
  showModal('<h2>📊 近7天周报</h2><div class="parent-stats"><div class="stat-card"><div class="stat-value">'+dayCount()+'</div><div class="stat-label">累计打卡</div></div><div class="stat-card"><div class="stat-value">'+rank.name+'</div><div class="stat-label">称号</div></div><div class="stat-card"><div class="stat-value">'+state.keys+'</div><div class="stat-label">钥匙</div></div><div class="stat-card"><div class="stat-value">'+tasks+'</div><div class="stat-label">本周任务</div></div><div class="stat-card"><div class="stat-value">'+acc+'%</div><div class="stat-label">正确率</div></div><div class="stat-card"><div class="stat-value">'+energy+'</div><div class="stat-label">本周能量</div></div></div><div class="day-row" style="font-weight:bold;color:#888;font-size:12px"><div class="day-date">日期</div><div class="day-tasks">任务</div><div class="day-energy">能量</div><div class="day-bar" style="background:none"></div><div class="day-acc">正确率</div></div>'+rows+'<div style="text-align:center;margin-top:14px"><button class="btn btn-primary" onclick="renderParent()">返回编辑</button> <button class="btn btn-success" onclick="closeModal()">关闭</button></div>');
}

function resetGame(){
  if(!confirm('清空所有进度重新开始吗？（自定义词不会被清）'))return;
  state={exp:0,bossLevel:0,questsDone:{},inventory:[],keys:0,date:today(),days:{},stats:{}};
  usedVocab=[];usedSentences=[];usedSpeech=[];
  save();renderAll();
}
function confetti(){
  var c=document.getElementById('confetti-canvas'),ctx=c.getContext('2d');c.width=window.innerWidth;c.height=window.innerHeight;
  var colors=['#f093fb','#f5576c','#43e97b','#667eea','#f5c518'],ps=[];
  for(var i=0;i<180;i++){ps.push({x:Math.random()*c.width,y:-20,r:Math.random()*6+3,c:colors[Math.floor(Math.random()*colors.length)],vy:Math.random()*4+2,vx:Math.random()*2-1})}
  var t=0;function loop(){ctx.clearRect(0,0,c.width,c.height);ps.forEach(function(p){p.y+=p.vy;p.x+=p.vx;ctx.fillStyle=p.c;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()});t++;if(t<170){requestAnimationFrame(loop)}else{ctx.clearRect(0,0,c.width,c.height)}}loop();
}

load();resetDay();renderAll();