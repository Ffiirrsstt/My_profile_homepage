var message = "รูปภาพขณะเป็นตัวแทนประจำเซคเรียนขึ้นนำเสนอผลงานในงานสัมมนาและงานนำเสนอผลงาน 'make Life ให้ Beautiful' โดยมีวิทยากรเป็นคุณ 'ณัฐชา คุ้มวงษ์ดี' (Senior markeing executive บริษัทเอฟเวอร์พิงค์)";

var linkImage = ["https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/345654175_567335771933198_532647323781512923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFEfi8uQjDVstk3wkJ0CSj-DSypacJjkJINLKlpwmOQkmlQOZgW-cp7tT77vhkMcqmU1OrL2B7i5nKCwLdGKs-r&_nc_ohc=G4q4Il8VKKUAX_ha4Eg&_nc_ht=scontent.fbkk22-7.fna&oh=00_AfDfBM_v9jaTNzfWQYyGwSyevYUoCciOSfvHaqBu9UWUtg&oe=646F8701", "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/346112974_288147196985275_6595936766585058630_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFS3LO-SVCEpfkIRlrzgyd_TlDwocrLeR1OUPChyst5HY2EU-NvSFoX-y5B-tn1gGxKTSxtq8CnJay74Fl4i3yF&_nc_ohc=M3lsKG8uI9AAX-2RHsT&_nc_ht=scontent.fbkk22-6.fna&oh=03_AdS1oE2R9GBbkQoTqfah3qobu7Lp5lAyK5Z8oJHiXQ7ZPg&oe=6491F23E", "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/345876150_3408829226023395_6892781101989006146_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVG6Cmh8_ONrsqasSEX62pGXnBDw30Ug0ZecEPDfRSDf__Bc1-jXctQe4KneV6vDNh-mq7jcNEgFD5u4wFEcmq&_nc_ohc=EVzvoZgdVXQAX9YKw-9&_nc_ht=scontent.fbkk22-7.fna&oh=00_AfDB9lADxDj_FH95hPopQhRwvPBJi6o0oP-66POrm2kh4g&oe=64703536"];

linkImage.forEach((value,pass) => { 
    document.getElementById("introduce").innerHTML += `<img class="imgfor_main" title="${message}" alt="${message}" src="${value}"></img>` ;
});


