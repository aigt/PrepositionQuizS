"use strict";

var questions = [

  //accuse
  {
    text:'accuse',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }, {
        text: 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'on' },
          { text: 'in', isCorrect: true },
          { text: 'about' }
        ]
      }
    ]
  },

  //decide
  {
    text:'decide',
    afterBe: false,
    complements: [
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for' },
          { text: 'about', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      }
    ]
  },

  //depend
  {
    text:'depend',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'on', isCorrect: true }
        ]
      }
    ]
  },

  //hungry
  {
    text:'hungry',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'в переносном смысле, например к знаниям и тп.',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //insist
  {
    text:'insist',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'на чём-то',
        prepositions:[
          { text: '-' },
          { text: 'on', isCorrect: true },
          { text: 'to' },
          { text: 'at' },
          { text: 'for' }
        ]
      }
    ]
  },

  //interested
  {
    text:'interested',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: '-' },
          { text: 'on' },
          { text: 'for' },
          { text: 'with' },
          { text: 'in', isCorrect: true }
        ]
      }
    ]
  },

  //introduce
  {
    text: 'introduce',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'on' },
          { text: 'with' },
          { text: 'of' },
          { text: 'by' },
          { text: 'about' }
        ]
      }, {
        text: 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'by' }
        ]
      }
    ]
  },

  //invite
  {
    text: 'invite',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'on' },
          { text: 'with' },
          { text: 'of' },
          { text: 'by' },
          { text: 'about' }
        ]
      }, {
        text: 'smb',
        comment: 'к кому-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'by' }
        ]
      }
    ]
  },

  //involved
  {
    text:'involved',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'во что-то',
        prepositions:[
          { text: '-' },
          { text: 'on' },
          { text: 'with' },
          { text: 'for' },
          { text: 'by' },
          { text: 'in', isCorrect: true }
        ]
      }
    ]
  },

  //kind
  {
    text:'kind',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'к кому-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'with' },
          { text: 'for' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //know
  {
    text:'know',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'о чём-то',
        prepositions:[
          { text: '-' },
          { text: 'of' },
          { text: 'from' },
          { text: 'about', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //laugh
  {
    text:'laugh',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'над кем-то',
        prepositions:[
          { text: '-' },
          { text: 'at', isCorrect: true },
          { text: 'over' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //listen
  {
    text:'listen',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'on' }
        ]
      }
    ]
  },

  //look
  {
    text:'look',
    afterBe: false,
    complements: [
      {
        text : 'smb',
        comment: 'присматривать за кем-то',
        prepositions:[
          { text: 'for' },
          { text: 'after', isCorrect: true },
          { text: 'on' },
          { text: 'about' },
          { text: 'of' }
        ]
      }, 
      {
        text : 'smb/smth',
        comment: 'на кого-то/что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'at', isCorrect: true },
          { text: 'on' },
          { text: 'of' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'искать что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'to' },
          { text: 'of' },
          { text: 'through' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'с нетерпением ждать чего-то',
        prepositions:[
          { text: 'forward to', isCorrect: true },
          { text: 'forward for' },
          { text: 'forward of' },
          { text: 'forward about' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'просматривать(газеты, записи и тп.)',
        prepositions:[
          { text: 'from' },
          { text: 'for' },
          { text: 'into' },
          { text: 'of' },
          { text: 'through', isCorrect: true }
        ]
      }
    ]
  },

  //mad
  {
    text:'mad',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'with' },
          { text: 'at', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //made
  {
    text:'made',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'из чего-то (первоначальный продукт сохраняется, присутствует в продукте, изделии)',
        prepositions:[
          { text: 'under' },
          { text: 'of', isCorrect: true },
          { text: 'from' },
          { text: 'with' }
        ]
      },
      {
        text : 'smth',
        comment: 'извлекать что-то из чего-то (конечный продукт отличается от первоначального)',
        prepositions:[
          { text: 'under' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'with' }
        ]
      }
    ]
  },

  //married
  {
    text:'married',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на ком-то',
        prepositions:[
          { text: 'with' },
          { text: 'at' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //matter
  {
    text:'matter',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'для',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //matter
  {
    text:'the matter',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'что-то происходит с кем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //multiply
  {
    text:'multiply',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'with' },
          { text: 'to' },
          { text: 'of' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'на что-то',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'with' },
          { text: 'to' },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //nice
  {
    text:'nice',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //opposed
  {
    text:'opposed',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //pay
  {
    text:'pay',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //patient
  {
    text:'patient',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //pleased
  {
    text:'pleased',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //point
  {
    text:'point',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'in' },
          { text: 'at', isCorrect: true },
          { text: 'of' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //polite
  {
    text:'polite',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'с кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //prepared
  {
    text:'prepared',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'к чему-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //protect
  {
    text:'protect',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'about' },
          { text: 'with' },
          { text: 'on' },
          { text: 'of' }
        ]
      },
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'over' },
          { text: 'from', isCorrect: true },
          { text: 'on' },
          { text: 'of' }
        ]
      }
    ]
  },

  //proud
  {
    text:'proud',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //qualified
  {
    text:'qulified',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'to' },
          { text: 'of' },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //ready
  {
    text:'ready',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //related
  {
    text:'related',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'к чему-то',
        prepositions:[
          { text: 'for' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //rely
  {
    text:'rely',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на кого-то/что-то',
        prepositions:[
          { text: 'for' },
          { text: 'to' },
          { text: 'of' },
          { text: 'upon', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      }
    ]
  },

  //remind
  {
    text:'remind',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'on' }
        ]
      }, 
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          
          { text: 'for' },
          { text: 'about', isCorrect: true },
          { text: 'of', isCorrect: true },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //responsible
  {
    text:'responsible',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'за кого-то/что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //satisfied
  {
    text:'satisfied',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of' },
          { text: 'with', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //scared
  {
    text:'scared',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //search
  {
    text:'search',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //separate
  {
    text:'separate',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'by' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'от чего-то',
        prepositions:[
          { text: 'by' },
          { text: 'with' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //similar
  {
    text:'similar',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кому-то/чему-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      }
    ]
  },

  //sorry
  {
    text:'sorry',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      },
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      }
    ]
  },

  //speak
  {
    text:'speak',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //stare
  {
    text:'stare',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на кого-то',
        prepositions:[
          { text: 'on' },
          { text: 'in' },
          { text: 'of' },
          { text: 'at', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //stop
  {
    text:'stop',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'for' },
          { text: 'from', isCorrect: true },
          { text: 'of' },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //substruct
  {
    text:'substruct',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'by' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'из чего-то',
        prepositions:[
          { text: 'by' },
          { text: 'with' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'in' }
        ]
      }
    ]
  },

  //sure
  {
    text:'sure',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'at' },
          { text: 'of', isCorrect: true },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //take care
  {
    text:'sure',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'о ком-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'of', isCorrect: true },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //talk
  {
    text:'talk',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //tell
  {
    text:'tell',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //terrified
  {
    text:'terrified',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //thank
  {
    text:'thank',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: 'with' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      }
    ]
  },

  //thirsty
  {
    text:'thirsty',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'в переносном смысле, например к знаниям и тп.',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //tired
  {
    text:'tired',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //travel
  {
    text:'travel',
    afterBe: false,
    complements:[
      {
        text : 'somewhere',
        comment: 'куда-то',
        prepositions:[
          { text: '-' },
          { text: 'in' },
          { text: 'of' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //upset
  {
    text:'upset',
    afterBe: 'any',
    complements: [
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }, 
      {
        text : 'smb',
        comment: 'в ком-то',
        prepositions:[
          { text: '-' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'on' },
          { text: 'at' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'чем-то',
        prepositions:[
          { text: '-' },
          { text: 'about', isCorrect: true },
          { text: 'with' },
          { text: 'on' },
          { text: 'at' }
        ]
      }
    ]
  },

  //wait
  {
    text:'wait',
    afterBe: false,
    complements: [
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //word-class
  {
    text:'world-class',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'in' },
          { text: 'of' },
          { text: 'with' },
          { text: 'at', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //worried
  {
    text:'worried',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'о ком-то/чём-то',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'of' },
          { text: 'with' },
          { text: 'at' },
          { text: 'on' }
        ]
      }
    ]
  }

];