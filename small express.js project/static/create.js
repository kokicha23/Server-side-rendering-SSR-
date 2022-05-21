let form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };
    await fetch('http://localhost:3000/api/create', {method: "POST", body:JSON.stringify(formData), headers:{ 'Content-Type':'application/json'}})
    e.target.reset();
    console.log(formData);
}