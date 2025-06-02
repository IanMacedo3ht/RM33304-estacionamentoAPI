const API = 'cnms-parking-api.net.uztec.com.br/api/v1'

async function checarveiculo() {
    const placa = document.getElementById('placa').value;
    const res = await fetch(`${API}/checar/${placa} `);
    const data = await res.json();
    document.getElementById('checar').textContent = JSON.stringify(data, null, 2);
}

async function entradaveiculo() {
    const placa = document.getElementById('regplaca').value.trim();
    const modelo = document.getElementById('regmodelo').value.trim();

    const res = await fetch (`${API}/entry` , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({placa, modelo})
    });
    const data = await res.json();
    document.getElementById('entrada').textContent = JSON.stringify(data, null, 2);
}

async function saidaveiculo() {
    const placa = document.getElementById('saiplaca').value;
    const res = await fetch(`${API}/exit${placa}`, {method: 'PATCH'});
    const data = await res.json();
    document.getElementById('saida').textContent = JSON.stringify(data,null, 2);
    
}