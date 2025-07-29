    // Data for each card
    const details = {
      diversity: {
        img: '../assets/diversity-3d.webp',
        title: 'DIVERSITY',
        desc: 'Curiosity is key to stimulating new and sustainable patterns of thinking. At IE University, we innovate education through sector-leading professors, personalized learning and cutting-edge technology in a way that humanizes learning. Our Liquid Learning educational experience elevates the learning journey, helping students curate their path, every step of the way.',
        link: '#'
      },
      innovation: {
        img: '../assets/innovation-3d.webp',
        title: 'INNOVATION',
        desc: 'Curiosity is key to stimulating new and sustainable patterns of thinking. At IE University, we innovate education through sector-leading professors, personalized learning and cutting-edge technology in a way that humanizes learning. Our Liquid Learning educational experience elevates the learning journey, helping students curate their path, every step of the way.',
        link: '#'
      },
      humanities: {
        img: '../assets/humanities-3d.webp',
        title: 'HUMANITIES',
        desc: 'Curiosity is key to stimulating new and sustainable patterns of thinking. At IE University, we innovate education through sector-leading professors, personalized learning and cutting-edge technology in a way that humanizes learning. Our Liquid Learning educational experience elevates the learning journey, helping students curate their path, every step of the way.',
        link: '#'
      },
      entrepreneurship: {
        img: '../assets/entrepreneurship-3d.webp',
        title: 'ENTREPRENEURSHIP',
         desc: 'Curiosity is key to stimulating new and sustainable patterns of thinking. At IE University, we innovate education through sector-leading professors, personalized learning and cutting-edge technology in a way that humanizes learning. Our Liquid Learning educational experience elevates the learning journey, helping students curate their path, every step of the way.',
        link: '#'
      }
    };

    // Hide both detail sections initially
    document.getElementById('purpose-detail').style.display = 'none';
    document.getElementById('other-detail').style.display = 'none';

    // Card click event
    document.querySelectorAll('.ie-card').forEach(card => {
      card.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'a') e.preventDefault();
        const key = this.getAttribute('data-key');
        // Hide both detail sections first
        document.getElementById('purpose-detail').style.display = 'none';
        document.getElementById('other-detail').style.display = 'none';

        if (key === 'purpose') {
          document.getElementById('purpose-detail').style.display = 'block';
          document.getElementById('purpose-detail-row').scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (details[key]) {
          const d = details[key];
          document.getElementById('detail-img').src = d.img;
          document.getElementById('detail-title').textContent = d.title;
          document.getElementById('detail-desc').textContent = d.desc;
          document.getElementById('detail-link').href = d.link;
          document.getElementById('other-detail').style.display = 'block';
          document.getElementById('other-detail-row').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  