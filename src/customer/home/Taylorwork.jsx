import React from 'react'
import './Taylorwork.css'
const Taylorwork = () => {
  const services = [

    {
      title: 'Create Profile',
      description: 'Provident nihil  minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
      icon: ' 👤', // Use Font Awesome or any icon set
      color: '#00BFFF',
    },
    {
      title: 'Take Order',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      icon: '📥',
      color: '#FF8C00',
    },
    {
      title: 'Make design',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      icon: '💬',
      color: 'Online measurements',
    },
    {
      title: 'Start Stiching',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      icon: '✂️',
      color: '#FF4500',
    },
    {
      title: 'Deliver Order',
      description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
      icon: '🚚 ',
      color: '#FF1493',
    },
    {
      title: 'Recieve Money',
      description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
      icon: '💵',
      color: '#8A2BE2',
    },
  ];
  return (
    <>
      {/* wok for taylor */}
      <div className="App">
        <div className="section-header">

          <h1>HOW IT WORK FOR TAYLOR?</h1>
        </div>
        <div className="works-container">
          {services.map((service, index) => (
            <div className="works-card" key={index}>
              <div className="works-icon" style={{ color: service.color }}>
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Taylorwork