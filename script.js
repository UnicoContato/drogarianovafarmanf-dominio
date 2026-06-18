const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
}

mobileMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModalBtnBottom = document.getElementById('close-modal-btn-bottom');
const modalBackdrop = document.getElementById('modal-backdrop');

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalBtnBottom.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
const dadosUnidades = {
  jarinu: {
    nome: "Jarinu (Matriz)",
    razao: "NOVA CAPRETI DROGARIA LTDA - CNPJ: 17.299.654/0001-60",
    telefone: "(11) 9435-42331",
    endereco: "Rua Napolis, 615 - Vila Nova Trieste, Jarinu - SP, CEP: 13.242-152",
    email: "novafarmatrieste@hotmail.com",
    linkMaps: "https://maps.google.com/?q=Rua+Napolis+615+Jarinu", 
    iframeMaps: "https://maps.google.com/maps?q=Rua%20Napolis,%20615,%20Vila%20Nova%20Trieste,%20Jarinu%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed" // Mantém o mapa original atual
  },
  jundiai: {
    nome: "Jundiaí",
    razao: "DROGARIA NOVA FARMA JUNDIAI LTDA - CNPJ: 23.835.778/0001-16",
    telefone: "(11) 93094-3787",
    endereco: "Av. Presbítero Manoel Antônio Dias Filho, 1590, Jundiaí - SP",
    email: "novafarmatrieste@hotmail.com",
    linkMaps: "https://maps.google.com/?q=Jundiai",
    iframeMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.746136462499!2d-47.006619125036664!3d-23.142952746353313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf304b92691cef%3A0x70c60758c27494d!2sAv.%20Presb%C3%ADtero%20Manoel%20Ant%C3%B4nio%20Dias%20Filho%2C%201590%20-%20Parque%20Res.%20Jundia%C3%AD%2C%20Jundia%C3%AD%20-%20SP%2C%2013212-461!5e0!3m2!1spt-BR!2sbr!4v1781801378969!5m2!1spt-BR!2sbr!4v1650000000000" // Substitua pelo link do iframe corporativo do maps
  },
  itupeva: {
    nome: "Itupeva",
    razao: "DROGARIA NOVA FARMA ITUPEVA LTDA - CNPJ: 47.893.891/0001-16",
    telefone: "(11) 94283-1451",
    endereco: "Rua José Marchi, 542 - Jardim Primavera, Itupeva - SP",
    email: "novafarmatrieste@hotmail.com",
    linkMaps: "https://maps.google.com/?q=Itupeva",
    iframeMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.395929606735!2d-47.06540542503616!3d-23.155745346815245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf36d4189858e5%3A0xeda8fc49495c6b76!2sR.%20Jos%C3%A9%20Marchi%2C%20542%20-%20Jardim%20Primavera%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1781802259115!5m2!1spt-BR!2sbr!4v1650000000000" // Substitua pelo link do iframe corporativo do maps
  }
};

function alterarUnidade(chaveUnidade) {
  Object.keys(dadosUnidades).forEach(ch => {
    const tabBtn = document.getElementById(`tab-${ch}`);
    const tabTitle = document.getElementById(`tab-title-${ch}`);
    if (tabBtn && tabTitle) {
      tabBtn.classList.remove('border-secondary');
      tabBtn.classList.add('border-transparent');
      tabTitle.classList.remove('text-secondary');
      tabTitle.classList.add('text-slate-600');
    }
  });

  const activeBtn = document.getElementById(`tab-${chaveUnidade}`);
  const activeTitle = document.getElementById(`tab-title-${chaveUnidade}`);
  if (activeBtn && activeTitle) {
    activeBtn.classList.remove('border-transparent');
    activeBtn.classList.add('border-secondary');
    activeTitle.classList.remove('text-slate-600');
    activeTitle.classList.add('text-secondary');
  }

  const dados = dadosUnidades[chaveUnidade];
  if (dados) {
    document.getElementById('loja-nome').innerText = dados.nome;
    document.getElementById('loja-razao').innerText = dados.razao;
    document.getElementById('loja-telefone').innerText = dados.telefone;
    document.getElementById('loja-endereco').innerText = dados.endereco;
    document.getElementById('loja-email').innerText = dados.email;
    document.getElementById('loja-link-mapas').href = dados.linkMaps;
    document.getElementById('loja-iframe-mapa').src = dados.iframeMaps;
  }
}