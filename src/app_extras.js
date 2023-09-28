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

    anchor_link(crate.crate, crate.name.replace('overworld_', ''), name);

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

    const links = document.createElement('td');
    const to_link = [
      { href: crate.repository, name: 'Repository' },
      { href: crate.documentation, name: 'Documentation' },
    ];

    for (const link of to_link) {
      if (!link.href) {
        continue;
      }

      anchor_link(link.href, link.name, links);
      links.appendChild(document.createElement('br'));
    }

    row.appendChild(name);
    row.appendChild(version);
    row.appendChild(downloads);
    row.appendChild(description);
    row.appendChild(links);

    component_list.appendChild(row);
  });

  btn.remove();

  const table = document.querySelector('#components');
  table.classList.remove('hidden');
}

function anchor_link(href, text, append_to) {
  const anchor = document.createElement('a');

  anchor.href = href;
  anchor.rel = 'noopener';
  anchor.target = '_blank';
  anchor.innerText = text;

  append_to.appendChild(anchor);
}
