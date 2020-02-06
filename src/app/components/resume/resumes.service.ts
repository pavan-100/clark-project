import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumesService {

  constructor() { }
  getContent() {
    return [
      {
        date: "2014-2015",
        header: "Master Degree of Design",
        paragraph: "CAMBRIDGE UNIVERSITY",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
      {
        date: "2014-2015",
        header: "Art & Creative Director",
        paragraph: "CAMBRIDGE UNIVERSITY",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
      {
        date: "2014-2015",
        header: "Bachelor's Degree of C.A",
        paragraph: "CAMBRIDGE UNIVERSITY",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
      {
        date: "2014-2015",
        header: "Wordpress Developer",
        paragraph: "CAMBRIDGE UNIVERSITY",
        para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
    {
      date: "2014-2015",
      header: "Diploma in Computer",
      paragraph: "CAMBRIDGE UNIVERSITY",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2014-2015",
      header: "UI/UX Designer",
      paragraph: "CAMBRIDGE UNIVERSITY",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    }
  ];
  }
}
