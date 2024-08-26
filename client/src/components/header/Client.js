import React from 'react';
import client1 from '../assets/image/client1.svg'; // Replace with actual paths
import client2 from '../assets/image/client2.svg';
import client3 from '../assets/image/client3.svg';
import client4 from '../assets/image/client4.svg';
import client5 from '../assets/image/client5.svg';

function HappyClients() {
  return (
    <section className="py-10 bg-aqua text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Happy Clients</h2>
        
        <div className="flex justify-center gap-8">
          {/* Client 1 */}
          <div className="client-card p-6  bg-transparent rounded-lg shadow-md">
            <img src={client1} alt="Client 1" className="rounded-full w-20 h-20 mx-auto mb-4"/>
            <p className="text-gray-600 mb-4">"Our experience with this company has been outstanding. Their attention to detail and commitment to quality is unparalleled. The project was completed on time, and the results exceeded our expectations. Highly recommended for anyone looking for professional and reliable service."</p>
            <h3 className="text-blue-600 font-semibold">Rourten Smith</h3>
            <span className="text-gray-500">CEO, Walmart</span>
          </div>

          {/* Client 2 */}
          <div className="client-card p-6 bg-transparent rounded-lg shadow-md">
            <img src={client2} alt="Client 2" className="rounded-full w-20 h-20 mx-auto mb-4"/>
            <p className="text-gray-600 mb-4">"Fantastic service from start to finish. The team was professional, attentive, and delivered results that truly impressed us. Their innovative approach and dedication were evident throughout the project. We couldn’t be happier with the outcome and will definitely be coming back."</p>
            <h3 className="text-blue-600 font-semibold">Shirpa Kayak</h3>
            <span className="text-gray-500">Designer, Creative Co.</span>
          </div>

          {/* Client 3 */}
          <div className="client-card p-6 bg-transparent rounded-lg shadow-md">
            <img src={client3} alt="Client 3" className="rounded-full w-20 h-20 mx-auto mb-4"/>
            <p className="text-gray-600 mb-4">"A pleasure to work with this team. Their expertise and dedication were evident in every aspect of the project. They met our tight deadlines and provided exceptional quality. We appreciate their proactive communication and problem-solving skills. Highly recommended for future projects."</p>
            <h3 className="text-blue-600 font-semibold">John Lapos</h3>
            <span className="text-gray-500">CTO, Tech Ltd.</span>
          </div>

          {/* Client 4 */}
          <div className="client-card p-6 bg-transparent rounded-lg shadow-md">
            <img src={client4} alt="Client 4" className="rounded-full w-20 h-20 mx-auto mb-4"/>
            <p className="text-gray-600 mb-4">"This company provided top-notch service. They were attentive to our needs, offered creative solutions, and delivered a final product that exceeded our expectations. Their professionalism and commitment to excellence were clear throughout the process. We look forward to working with them again."</p>
            <h3 className="text-blue-600 font-semibold">Manny Freeman</h3>
            <span className="text-gray-500">Marketing Manager, XYZ Inc.</span>
          </div>

          {/* Client 5 */}
          <div className="client-card p-6 bg-transparent rounded-lg shadow-md">
            <img src={client5} alt="Client 5" className="rounded-full w-20 h-20 mx-auto mb-4"/>
            <p className="text-gray-600 mb-4">"We are thoroughly impressed with the results. The team’s attention to detail and ability to adapt to our needs was remarkable. They worked diligently to ensure our satisfaction and delivered an outstanding product. We would not hesitate to recommend their services to others."</p>
            <h3 className="text-blue-600 font-semibold">Lucy</h3>
            <span className="text-gray-500">Sales, Market Xpress</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
