Proje create-react-app kullanılarak geliştirildi, bu sebeple klonlama işleminden sonra npm install ve npm start demeniz yeterli olacaktır.


Eksikliklerim:

* Ticket Details(/src/containers/Details) sayfası için herhangi bir şekilde Redux entegrasyonu yapamadım, sadece component'in local state'inde fetch'ten dönen endpoint sonuçlarını hook'ları kullanarak tutuyorum. Bütün event'leri dönen API endpoint yerine bir tane event'e özel dönen API endpointi kullanma yolunu seçmem sonucuyla, öngöremediğim ve çözümünü bulamadığım sorunlarla karşılaştım, bir sebepten ötürü bazı dataları parçalayamadım ve kullanamadım.

* Unit testing yapılmadı. Jest ile alakalı tecrübem ilk e-mailimde bahsettiğim kitaptan öğrendiklerimin ötesinde değildi ve o kitaptan Jest ile alakalı kısmı geçen yazın başında yaptığım için, ve ondan sonrasın da kullanmadığım, maalesef zaman geçmesiyle de birlikte unutmuşum.

* Bu projede zamanımın yüzde 80'ini Redux'ın terminolojisini öğrenmem ve öğrendiklerimi projede kullanmaya çalışmam aldı diyebilirim. Benim önceki tecrübem de izlediğim video guide'larla ve takip ettiğim tutorial'lar eksenindeydi ve hepsi synchronous action'larla alakalıydı. Bu proje sayesinde ilk defa api call yapan Redux action'ları yazmış oldum. Async action'lar için thunk middleware'ini kullandım ve diğer çeşitli redux middleware'larından haberdar olmuş oldum.

* Bu proje benim ilk defa Redux kullandığım proje oldu, bu sebeple lütfen Best Practice ya da Naming Convention aramayınız, gözleriniz kanayabilir. Şimdiden kusura bakmayınız. :)

* Uygulamayı belli bir mantık ekseninde bölüp, çeşitli reducer'lar üretmeyi denedim, fakat combineReducers kullandığım zaman bir sorunla karşılaşmaya başladım ve bu sebeple geri sarmak durumunda kaldım.

İlginiz ve vaktiniz için teşekkürler.
