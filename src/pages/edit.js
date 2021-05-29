import React, { useEffect } from "react"
import { graphql } from "gatsby"
import {
  Box,
  Badge,
  Icon,
  Heading,
  Divider,
  Text,
  Tooltip,
  Link,
  PseudoBox,
} from "@chakra-ui/core"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import SEO from "../components/seo"
import CompGroup from "../components/CompGroup"

const Index = ({ data, location }) => {
  const [{ alternatives }] = useLocalJsonForm(data.altsJson, {
    label: "Add an app comparison",
    fields: [
      {
        label: "Comparisons",
        name: "rawJson.alternatives",
        component: "group-list",
        description: "Comparisons List",
        itemProps: (item) => ({
          label: item.commercial[0].main,
        }),
        defaultItem: () => ({
          main: "New Comparison",
          alts: [],
          id: Math.random().toString(36).substr(2, 9),
        }),
        fields: [
          {
            label: "Commercial Apps",
            name: "commercial",
            component: "group-list",
            description: "Commercial Apps",
            itemProps: (item) => ({
              label: item.main,
            }),
            fields: [
              {
                label: "Main Application",
                name: "main",
                component: "text",
              },
              {
                label: "Website",
                name: "website",
                component: "text",
              },
              {
                label: "Logo URL",
                name: "svg",
                component: "text",
              },
            ],
          },
          {
            label: "Opensource Alternatives",
            name: "alts",
            component: "group-list",
            description: "Alternatives List",
            itemProps: (item) => ({
              label: item.name,
            }),
            fields: [
              {
                label: "Name",
                name: "name",
                component: "text",
              },
              {
                label: "Stars",
                name: "stars",
                component: "text",
              },
              {
                label: "License",
                name: "license",
                component: "text",
              },
              {
                label: "Logo URL",
                name: "svg",
                component: "text",
              },
              {
                label: "Site",
                name: "site",
                component: "text",
              },
              {
                label: "Language",
                name: "language",
                component: "text",
              },
              {
                label: "Repo",
                name: "repo",
                component: "text",
              },
              {
                label: "Deploy",
                name: "deploy",
                component: "text",
              },
            ],
          },
          {
            name: "category",
            component: "select",
            label: "Category",
            description: "Select a category",
            options: [
              "E-commerce",
              "Developer Tools",
              "Social Media",
              "Communication",
              "Analytics",
              "Password Managers",
              "Form Builder",
              "Cloud",
              "Deployment",
              "Product Management",
              "Automation",
              "CRM",
            ],
          },
        ],
      },
    ],
  })

  return (
    <>
      <SEO title="Opensource.godot" />
      <Box
        bg="white"
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      >
        <Box px={{ md: "2rem" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            px="1rem"
          >
            <Box py={5}>
              <Heading as="h2" size="lg">
                Open-source game assets
              </Heading>
              <Text fontSize="md" fontWeight={400} color="#939fae" mt={1}>
                Find open-source Godot Engine contributions
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        ml="auto"
        mr="auto"
        maxWidth="60rem"
        px={2}
        py={4}
      >
        {data.altsJson.alternatives.map((comp) => (
          <CompGroup
            comp={comp}
            commercial={comp.commercial}
            alts={comp.alts}
          />
        ))}
      </Box>
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    altsJson {
      alternatives {
        commercial {
          main
          svg
          website
        }
        alts {
          name
          license
          stars
          svg
          repo
          site
          language
          deploy
        }
      }
      rawJson
      fileRelativePath
    }
  }
`
