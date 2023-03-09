import { Link } from "react-router-dom";
import css from "../assets/images/logo_css.png";
const Css = () => {
  return (
    <div>
      <div className="card p-4 text-center flex flex-col gap-2">
        <div>
          <img src={css} alt="css" className="m-auto w-1/3 md:w-1/4 lg:w-1/5" />
        </div>
        <h3 className="font-bold text-xl">CSS3 Styling</h3>
        <p>
          CSS (Cascading Style Sheets), web sayfalarının görünümünü kontrol
          etmek için kullanılan bir stil dilidir. HTML'in aksine, CSS sayfanın
          tasarımını belirtir ve sayfanın nasıl görüneceğini tanımlar. CSS, HTML
          sayfalarında bulunan HTML etiketlerine stil özellikleri ekleyerek,
          sayfanın yazı tipi, boyutu, rengi, arkaplan rengi, hizalama, kenarlık
          gibi özelliklerini tanımlar. CSS ile sayfaların görünümü ayrı bir
          dosyada tanımlandığı için, web sayfalarının tasarımı, içerik ve
          işlevselliği birbirinden ayrı olarak yönetilebilir. CSS, web
          tasarımcıların sayfaları görsel olarak daha çekici ve kullanıcı dostu
          hale getirmelerine yardımcı olur. Ayrıca, bir web sayfasındaki stil
          özelliklerini güncellemek ve değiştirmek daha kolay hale gelir. CSS,
          aynı zamanda mobil cihazlar gibi farklı cihazlarda sayfaların
          görüntülenmesini de kolaylaştırır. CSS, bir dizi seçiciye ve stil
          özelliklerine sahiptir. Seçiciler, HTML etiketlerini, sınıfları veya
          kimlikleri hedeflemek için kullanılır. Stil özellikleri, seçicilere
          uygulanan özelliklerdir ve özellik değerleri belirtilerek sayfanın
          stilini tanımlar.
        </p>
        <Link to={"/"} className="text-center">
          <button className="py-2 px-4 text-white bg-red-500">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Css;
