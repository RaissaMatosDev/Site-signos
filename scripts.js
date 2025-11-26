
function getZodiacSign() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
      alert("Por favor, insira sua data de nascimento.");
      return;
    }
  
    localStorage.setItem('birthdate', birthdateInput);  
    window.location.href = "result.html";  
  }
  localStorage.setItem('birthdate', '2000-08-15'); 

  
  function loadDescription(zodiacSign) {
    fetch('signos.xml')
      .then(response => response.text())
      .then(xmlText => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  
        // Encontrar o signo no XML
        const signElement = xmlDoc.querySelector(`signo[nome="${zodiacSign}"]`);
        const description = signElement ? signElement.querySelector("descricao").textContent : "Descrição não encontrada.";
  
        // Atualizar o conteúdo da descrição no HTML
        document.getElementById('sign-description').textContent = description;
      })
      .catch(error => {
        console.error("Erro ao carregar o arquivo XML:", error);
        document.getElementById('sign-description').textContent = "Erro ao carregar a descrição.";
      });
  }
  