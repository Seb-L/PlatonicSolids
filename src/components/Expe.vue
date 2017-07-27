<template>
  <div class="expe">
    <Timeline>
      <Timeline-item>
        <h1>Lead Front-End Developer</h1>
        <h2>Numberly / 1000mercis Group</h2>
        <h3>March 2016 / Today</h3>
        <p>
          - Validation technique<br>
          - Management d'équipe<br>
          - Gestion des plannings avec le lead project manager<br>
          - Développement des outils interne et boilerplates de l'équipe <br>
          - Veille et évolution des technos front<br>
          - Participation à l'évolution de la stack complete avec le lead dev back<br>
          - Participation aux brainstorms des projets<br>
          - Préparations de Hacknight et formations interne
        </p>
      </Timeline-item>

      <Timeline-item>
        <h1>Front-End Developer</h1>
        <h2>Numberly / 1000mercis Group</h2>
        <h3>Jan 2015 / March 2016</h3>
        <p>
          - HTML5/CSS3 Intégrations and AngularJS development.<br>
          - AngularJS Boilerplate development.
        </p>
      </Timeline-item>

      <Timeline-item>
        <h1>Web Integrator</h1>
        <h2>Wakanda / 4D</h2>
        <h3>Oct 2014 / Jan 2015</h3>
        <p>
          - HTML/CSS Intégrations.<br>
          - Development of a CSS Framework.<br>
          - Wakanda extension development in AngularJS.
        </p>
      </Timeline-item>

      <Timeline-item>
        <h1>Graphic Designer</h1>
        <h2>LPG Systems</h2>
        <h3>May 2009 / Oct 2014</h3>
        <p>
          - Graphic Design (Print, Web, 3D, Video).<br>
          - Flash Animations.<br>
          - HTML/CSS Integrations.
        </p>
      </Timeline-item>

      <Timeline-item>
        <Icon type="university" slot="dot"></Icon>
        <h1>Dévellopeur multimédia</h1>
        <h2>Formasoft</h2>
        <h3>2008 / 2009</h3>
        <p>Niveau III Domaine d’études Multimédia, Infographie, Webdesign</p>
      </Timeline-item>

      <Timeline-item>
        <h1>Sound Technician</h1>
        <h2>SEMEC Palais de Festivals de Cannes</h2>
        <h3>Feb 2004 / June 2006</h3>
      </Timeline-item>

      <Timeline-item>
        <Icon type="university" slot="dot"></Icon>
        <h1>Assistant de production sonore</h1>
        <h2>C.D.S.E.</h2>
        <h3>2003 / 2004</h3>
        <p>Niveau IV Domaine d’études Musique, audiovisuel, événementiel</p>
      </Timeline-item>

    </Timeline>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.expe{
  padding: 0 4rem;
}
h1{
  line-height: 1rem;
  margin-bottom: 0.25rem;
}
h2{
  font-style: italic;
  font-weight: normal;
  margin-bottom: 0;
}
h3{
  color: #acacac;
  line-height: 1;
  margin-bottom: 1rem;
}
</style>
