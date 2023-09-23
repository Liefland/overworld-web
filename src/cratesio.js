export async function list_overworld_crates() {
  const crates_list_api_rq = await fetch('https://crates.io/api/v1/crates?q=overworld_*');
  const response = await crates_list_api_rq.json();

  return normalize_overworld_crates(
    await recursive_list_overworld_crates(response.meta.next_page, response.crates, 0, 5)
  );
}

async function recursive_list_overworld_crates(next_page, crates, current_page, limit) {
  if (current_page >= limit || next_page === null) {
    return crates;
  }

  current_page++;

  const crates_list_api_rq = await fetch(next_page);
  const response = await crates_list_api_rq.json();

  if (response.crates === null || response.crates.length === 0) {
    return crates;
  }

  return recursive_list_overworld_crates(
    response.meta.next_page,
    crates.concat(response.crates),
    current_page,
    limit
  );
}

function filter_overworld_crates(crates) {
  return crates.filter((crate) => {
    return (
      crate.name.startsWith('overworld') &&
      crate.repository === 'https://github.com/Liefland/overworld'
    );
  });
}

function normalize_overworld_crates(crates) {
  return filter_overworld_crates(crates).map((crate) => {
    return {
      name: crate.name,
      homepage: crate.homepage,
      repository: crate.repository,
      description: crate.description,
      version: crate.newest_version,
      downloads: crate.downloads,
      documentation: crate.documentation,
    };
  });
}
