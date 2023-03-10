import { useNavigate } from "react-router-dom";
import html from "../assets/images/logo_html.png";
const Html = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card p-4 text-center flex flex-col gap-2">
        <div>
          <img
            src={html}
            alt="html"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold text-xl">HTML5 Markup</h3>
        <p>
          HTML5, Hypertext Markup Language'ın (Hipermetin İşaretleme Dili) 5.
          sürümüdür ve web sayfaları oluşturmak için kullanılan bir işaretleme
          dilidir. HTML, web sayfalarının yapısını tanımlayan bir işaret
          dilidir. HTML5, önceki sürümlere kıyasla daha gelişmiş bir dil
          yapısına sahiptir ve modern web sayfalarının oluşturulmasına olanak
          tanır. HTML5 markup, web sayfalarının kodlama yapısını tanımlamak için
          kullanılan bir terimdir. HTML5 markup, bir web sayfasının içeriğini
          tanımlayan etiketler ve özellikler içerir. Bu markup, metin, resim,
          bağlantılar, videolar ve diğer medya türlerini web sayfasına eklemek
          için kullanılır.
        </p>
        <div className="text-center">
          <button
            className="py-2 px-4 text-white bg-red-500 "
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html;
