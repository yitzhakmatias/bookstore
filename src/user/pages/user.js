import React from 'react';

const users = () => {
    return (
        <section>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Primary title
                        </h1>
                        <h2 className="subtitle">
                            <div className="container">Primary subtitle</div>

                        </h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h1 className="title">Section</h1>
                    <h2 className="subtitle">
                        A simple container to divide your page into <strong>sections</strong>, like the one you're
                        currently reading
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title">One</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.</p>
                        </div>
                        <div className="tile is-child box">
                            <p className="title">Two</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.</p>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Three</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
                                pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida
                                libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci,
                                quis semper odio felis ut quam.</p>
                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
                                Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et
                                sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                                felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget
                                varius ligula, at volutpat tortor.</p>
                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue
                                lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a
                                metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero.
                                Quisque non semper leo.</p>
                        </div>
                    </div>
                </div>
            </section>


        </section>
    );
};

export default users;
