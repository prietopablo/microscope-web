
     
      <Grid columns={periode.length} divided>
        {/* une row pour afficher le contenu de toute une PERIODE */}
        <Grid.Row>
          {/* COLONNE PERIODE */}
          <Grid.Column style={{ background: "rgb(240, 244, 247)" }}>
            {/* Carte Période */}
            <Card style={{ background: "rgb(196, 207, 217)" }}>
              <Card.Content>
                <Card.Header>PERIODE 1</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button>créer un évenement</Button>
              </Card.Content>
            </Card>
            {/* Grid pour afficher les colonnes EVENEMENT/SCENE */}
            <Grid columns={2} divided>
              {/* ROW EVENEMENT */}
              <Grid.Row>
                {/* COLONNE EVENEMENT */}
                <Grid.Column verticalAlign="middle">
                  {/* CARTE EVENEMENT */}
                  <Card style={{ background: "rgb(45, 118, 103)" }}>
                    <Card.Content>
                      <Card.Header>EVENEMENT 1</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                  {/* FIN CARTE EVENEMENT */}
                </Grid.Column>
                {/* FIN COLONNE EVENEMENT */}

                {/* COLONNE SCENE */}
                <Grid.Column>
                  {/* CARTE SCENE */}
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 1</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                  {/* FIN CARTE SCENE */}

                  {/* CARTE SCENE */}
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 2</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                  {/* FIN CARTE SCENE */}

                  {/* CARTE SCENE */}
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 3</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                  {/* FIN CARTE SCENE */}
                </Grid.Column>
                {/* FIN COLONNE SCENE */}
              </Grid.Row>
              {/* FIN ROW EVENEMENT */}

              {/* ROW EVENEMENT/PERIODE */}
              <Grid.Row>
                {/* COLONNE EVENEMENT */}
                <Grid.Column verticalAlign="middle">
                  {/* CARTE EVENEMENT */}
                  <Card style={{ background: "rgb(45, 118, 103)" }}>
                    <Card.Content>
                      <Card.Header>EVENEMENT 2</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
                {/* FIN COLONNE EVENEMENT */}

                {/* COLONNE SCENE */}
                <Grid.Column>
                  {/* CARTRE SCENE */}
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 1</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                  {/* FIN CARTRE SCENE */}

                  {/* CARTRE SCENE */}
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 2</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>

                  {/* FIN CARTRE SCENE */}
                </Grid.Column>
                {/* FIN COLONNE SCENE */}
              </Grid.Row>
              {/* FIN ROW EVENEMENT/PERIODE */}
            </Grid>
            {/* FIN Grid pour afficher les colonnes EVENEMENT/SCENE */}
          </Grid.Column>
          {/* FIN PERDIODE */}

          {/* NOUVELLE COLONNE PERIODE ET REBELOTTE ! */}
          <Grid.Column style={{ background: "rgb(240, 244, 247)" }}>
            <Card style={{ background: "rgb(196, 207, 217)" }}>
              <Card.Content>
                <Card.Header>PERIODE 2</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra></Card.Content>
            </Card>

            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column verticalAlign="middle">
                  <Card style={{ background: "rgb(45, 118, 103)" }}>
                    <Card.Content>
                      <Card.Header>EVENEMENT 2</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>

                <Grid.Column>
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 1</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>

                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE 2</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column verticalAlign="middle">
                  <Card style={{ background: "rgb(45, 118, 103)" }}>
                    <Card.Content>
                      <Card.Header>EVENEMENT</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>

                <Grid.Column>
                  <Card style={{ background: "rgb(77, 92, 106)" }}>
                    <Card.Content>
                      <Card.Header>SCENE</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      );