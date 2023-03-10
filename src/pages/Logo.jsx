import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_brush.png";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card p-4 text-center flex flex-col gap-2">
        <div>
          <img
            src={logo}
            alt="css"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold text-xl">Graphic Design</h3>
        <p>
          Grafik tasarım, görsel iletişim araçlarının tasarımını yapmak için
          kullanılan bir sanat ve meslektir. Grafik tasarım, birçok farklı
          alanda kullanılan görsel iletişim araçlarını tasarlamak için
          kullanılır. Bu alanlar arasında reklamcılık, pazarlama, web tasarımı,
          yayıncılık, film ve televizyon bulunur. Grafik tasarımcıları, estetik
          açıdan çekici ve etkileyici görsel iletişim araçları oluşturmak için
          renk, tipografi, görseller ve düzenleme tekniklerini kullanırlar.
          Grafik tasarım süreci, bir proje veya görev için hedef kitleyi
          anlamak, iletişim hedeflerini belirlemek, tasarım seçeneklerini
          oluşturmak, müşteri geribildirimini almak ve son tasarımı üretmek gibi
          bir dizi adımdan oluşur. Grafik tasarım, birçok farklı araç ve
          teknolojiyi kullanır. Bu araçlar arasında dijital resim işleme
          yazılımları, vektör tabanlı çizim programları, üç boyutlu modelleme
          yazılımları, web tasarım araçları ve video düzenleme yazılımları
          bulunur. Grafik tasarımcılar, bu araçları kullanarak müşteri
          ihtiyaçlarına uygun görsel iletişim araçları tasarlarlar. Grafik
          tasarımın amacı, görsel iletişim araçları ile mesajların etkili bir
          şekilde iletilmesini sağlamaktır. Başarılı bir grafik tasarım,
          izleyicilerin dikkatini çeker, mesajın anlaşılmasına yardımcı olur ve
          ürün veya hizmetin satışını artırabilir.
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

export default Logo;
