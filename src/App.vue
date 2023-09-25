<script setup>
import { request_overworld_crates } from './app_extras';
import OverworldApp from './components/OverworldApp.vue';
</script>

<template>
  <header>
    <h1>Overworld</h1>
    <p>Library and common tools for tabletop, rpg, incremental, and management-style games</p>
  </header>

  <main>
    <div class="container">
      <div class="card shadow-red centerpiece">
        <h2>What is it?</h2>
        <p>
          Overworld is a set of libraries/tooling to aid in creating and managing a world for a
          tabletop roleplaying game, rpg, incremental game or management style game.
        </p>
        <p>The name 'overworld' comes from several core ideas:</p>
        <ul>
          <li>1. You, as the game master or engineer, will be observing from the "overworld"</li>
          <li>
            2. The tooling provided does not directly aim to influence gameplay, only make it faster
            and easier for you to work on what matters
          </li>
        </ul>
        <p>
          Overworld does not set the rules of your game, only hands you the tools needed to
          implement them.
        </p>
        <p>Presently, this is early software and not production ready.</p>
      </div>
    </div>

    <div class="row">
      <div class="card shadow-green">
        <h2>Split up in components</h2>
        <p>You can add the entire library, or selectively choose the components you need.</p>
        <p>
          Only need Dice logic?
          <br />
          <code>cargo add overworld_dice</code>
        </p>
        <p>
          If at any point, you need the entire library - you can swap out your individual imports
          for the core library. Start small, expand when you need to!
        </p>
      </div>

      <div class="card shadow-green">
        <h2>Well tested, small footprint</h2>
        <p>
          We aim to excel in test coverage, newly introduced features should have good test
          coverage, and a robust CI testsuite
        </p>
        <p>
          Thanks to Rust's features, we can ensure a smaller footprint and rely on fewer
          dependencies
        </p>
      </div>
    </div>

    <div class="row">
      <div class="card shadow-blue">
        <h2>Which components are there?</h2>
        <p>
          <button id="btn-load-crates" @click="request_overworld_crates">
            Load crates from crates.io
          </button>
        </p>
        <table id="components" class="hidden">
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Downloads</th>
              <th>Description</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody id="component-list"></tbody>
        </table>

        <h3>Things built with Overworld</h3>
        <OverworldApp
          url="https://github.com/liefland/overworld-demo-typegame"
          name="Typing Game (demo)"
          attribution="the Overworld team"
        />
        <!-- feel free to add your own items here -->
      </div>

      <div class="card shadow-blue">
        <h2>Core Principles</h2>
        <p>From the ground up, there's a focus on three key elements:</p>

        <h4>Compartmentalization</h4>
        <p>You can mix and match components as you desire, to only require the things you need</p>
        <p>
          In addition, you can disable and mix dependencies using Rust's powerful
          <code>feature</code> system
        </p>

        <h4>Reliable</h4>
        <p>
          It should be clear which components are stable - using semver, the 1.x version is
          indicative of stable APIs
        </p>
        <p>
          The unstable APIs will be properly denoted with a neccessary namespace from the main
          package.
          <br />
          This requires the <code>experiments</code> feature.
        </p>
        <p><code>use overworld::experiment::some_component_name;</code></p>
        <p>
          Note that if you include components individually rather than using the metapackage,<br />you
          should look at the version number.
        </p>

        <h4>Iterate</h4>
        <p>In short: Ship fast, ship early.</p>
        <p>We are set up to release often, it shouldn't take forever to get a new version out.</p>

        <h4>Reduced dependency footprint</h4>
        <p>
          We aim to have only essential dependencies, and allow as much dependencies as possible to
          be disabled. The metapackage allows you to disable and enable features at will, and the
          components all allow mixing with features for even more granularity.
        </p>

        <h4>Secure</h4>
        <p>
          Built upon secure design principles, and a well defined way to submit potential
          vulnerabilities.<br />It should be hard to make mistakes.
        </p>
        <p>
          If you think you've found a security issue, please submit it via GitHub or on the
          <code>security@</code> email address.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="card shadow-rust">
        <h2>Written in Rust</h2>
        <p>Enjoy the performance and safety of the Rust language and it's compiler</p>
        <p>
          <a href="https://crates.io/crates/overworld" rel="noopener" target="_blank">
            overworld on crates.io
          </a>
        </p>
      </div>

      <div class="card shadow-rust">
        <h2>Permissive licensing</h2>
        <p>
          Built with the choice between the
          <a href="https://github.com/Liefland/overworld#license" rel="noopener" target="_blank">
            MIT, Apache-2.0
          </a>
          licenses,<br />
          and most direct creative works fall under CC0 unless otherwise specified.
        </p>
      </div>
    </div>
  </main>

  <footer>
    <p>
      &copy; Liefland<br />
      Library is in early rapid development, some things may be inaccurate or are subject to change
    </p>
    <p>
      <a href="https://github.com/Liefland/overworld" rel="noopener" target="_blank">
        Overworld on GitHub
      </a>
      &mdash;
      <a href="https://github.com/Liefland/overworld-web" rel="noopener" target="_blank">
        Source code for this website
      </a>
      &mdash;
      <a href="https://github.com/Liefland/overworld/security" rel="noopener" target="_blank">
        Security Policy
      </a>
    </p>
  </footer>
</template>

<style scoped>
header,
main,
footer {
  text-align: center;
}

ul {
  list-style-type: none;
}

#btn-load-crates {
  background-color: #2b2b2b;
  border: 2px solid #616161;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  transition: filter 0.5s ease-in-out;
}

#btn-load-crates:hover {
  filter: brightness(150%);
}

.centerpiece {
  display: grid;
  max-width: 1024px;
}

div.centerpiece {
  margin: 0 auto;
}

.card {
  background-color: #2b2b2b;
  border: 2px solid #616161;
  border-radius: 1rem;
  margin: 1rem 0.25rem;
  padding: 0.25rem;
  padding-top: 0.5rem;
  min-height: 20vh;

  transition:
    border-color 0.5s ease-in-out,
    border-radius 0.5s ease-in-out;
}

.shadow-red {
  filter: drop-shadow(0 0 0.5rem #e6020234);
}

.shadow-green {
  filter: drop-shadow(0 0 0.5rem #43e60234);
}

.shadow-blue {
  filter: drop-shadow(0 0 0.5rem #0276e634);
}

.shadow-rust {
  filter: sepia(0.33);
  box-shadow: 0 0 0.25rem #705407c7;
}

.card:hover {
  border-color: #818181;
  border-radius: 1.1rem;
}

.shadow-red:hover {
  box-shadow: 0 0 0.25rem #e60202;
  background-color: #af050521;
}

.shadow-green:hover {
  box-shadow: 0 0 0.25rem #43e602;
  background-color: #05af6e21;
}

.shadow-blue:hover {
  box-shadow: 0 0 0.25rem #0276e6;
  background-color: #056eaf21;
}

.shadow-rust:hover {
  filter: sepia(0.75);
}

footer {
  margin-bottom: 4rem;
}
</style>
