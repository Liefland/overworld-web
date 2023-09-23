import { list_overworld_crates } from './cratesio';

export async function request_overworld_crates() {
  const btn = document.querySelector('#btn-load-crates');
  btn.disabled = true;

  const crates = await list_overworld_crates();
  const component_list = document.querySelector('#component-list');

  crates.forEach((crate) => {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.classList.add('mono');
    const repository_anchor = document.createElement('a');
    repository_anchor.href = crate.repository;
    repository_anchor.rel = 'noopener';
    repository_anchor.target = '_blank';
    repository_anchor.innerText = crate.name.replace('overworld_', '');
    name.appendChild(repository_anchor);

    const description = document.createElement('td');
    const description_p = document.createElement('p');
    description_p.textContent = crate.description;
    description.appendChild(description_p);

    const version = document.createElement('td');
    version.classList.add('mono');
    const version_p = document.createElement('p');
    version_p.textContent = crate.version;
    version.appendChild(version_p);

    const downloads = document.createElement('td');
    downloads.classList.add('mono');
    downloads.innerHTML = new Intl.NumberFormat().format(Number(crate.downloads));

    const documentation = document.createElement('td');
    if (crate.documentation !== null) {
      const documentation_anchor = document.createElement('a');
      documentation_anchor.href = crate.repository;
      documentation_anchor.rel = 'noopener';
      documentation_anchor.target = '_blank';
      documentation_anchor.innerText = 'Documentation';
      documentation.appendChild(documentation_anchor);
    }

    row.appendChild(name);
    row.appendChild(version);
    row.appendChild(downloads);
    row.appendChild(description);
    row.appendChild(documentation);

    component_list.appendChild(row);
  });

  btn.remove();

  const table = document.querySelector('#components');
  table.classList.remove('hidden');
}
